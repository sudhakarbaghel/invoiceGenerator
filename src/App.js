import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Table, Button, Form, Row, Col } from "react-bootstrap";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import Invoice from './invoice';
import html2canvas from 'html2canvas';
import productsData from "./pd.csv";

function App() {

  const snapshotRef = useRef(null);

  const handleSnapshot = () => {
    const content = snapshotRef.current;
    html2canvas(content).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [content.offsetWidth, content.offsetHeight],
      });
      pdf.addImage(imgData, 'PNG', 0, 0, content.offsetWidth, content.offsetHeight);
      pdf.save('invoice.pdf');
    });
  };
  const [products, setProducts] = useState([]);
  const [noOfRows, setNoOfRows] = useState([]);
  const [total, setTotal] = useState(0);
  const [cgstTotal, setCgstTotal] = useState(0);
  const [sgstTotal, setSgstTotal] = useState(0);
  const [totalTaxableINR, setTotalTaxableINR] = useState(0);
  const [totalDiscountedPrice, setTotalDiscountedPrice] = useState(0);



  const [invoiceNo, setInvoiceNo] = useState("");
  const [invoiceDate, setInvoiceDate] = useState(new Date().toISOString().substr(0, 10));
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerMobNo, setCustomerMobNo] = useState("");
  const [customerGSTIN, setCustomerGSTIN] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };



  const handleAddRow = () => {
    setNoOfRows([...noOfRows, {}]);
  };

  const handleProductChange = (value, index) => {
    const selectedProduct = products.find(
      (product) => product.product_name === value
    );


    const sgstAmount = ((selectedProduct.sgst * (selectedProduct.rate) / 100)).toFixed(2);
    const cgstAmount = ((selectedProduct.cgst * (selectedProduct.rate) / 100)).toFixed(2);
    const amount = (parseFloat(selectedProduct.rate) + parseFloat(sgstAmount) + parseFloat(cgstAmount)).toFixed(2);
    const updatedRows = [...noOfRows];
    updatedRows[index] = {
      ...updatedRows[index],
      product: selectedProduct.product_name,
      hsn_code: selectedProduct.hsn_code,
      uom: selectedProduct.uom,
      rate: selectedProduct.rate,
      cgst: selectedProduct.cgst,
      sgst: selectedProduct.sgst,
      qty: 1,
      discount: 0,
      discountAmt: 0,
      taxableINR: selectedProduct.rate,
      price: selectedProduct.rate,
      amount, sgstAmount, cgstAmount


    };
    setNoOfRows(updatedRows);
  };

  const calculateRowValues = (row, qty, discount) => {
    const price = qty * row.rate;
    const discountAmt = discount * price / 100;
    const taxableINR = (price - discountAmt).toFixed(2);
    const sgstAmount = ((row.sgst * taxableINR) / 100).toFixed(2);
    const cgstAmount = ((row.cgst * taxableINR) / 100).toFixed(2);
    const amount = (parseFloat(taxableINR) + parseFloat(sgstAmount) + parseFloat(cgstAmount)).toFixed(2);
    return {
      ...row,
      qty: parseInt(qty),
      discount: parseFloat(discount),
      price,
      discountAmt,
      taxableINR,
      sgstAmount,
      cgstAmount,
      amount
    };
  }

  const handleQtyChange = (value, index) => {
    const updatedRows = [...noOfRows];
    const row = updatedRows[index];
    const updatedRow = calculateRowValues(row, value, row.discount);
    updatedRows[index] = updatedRow;
    setNoOfRows(updatedRows);
  };

  const handleDiscChange = (value, index) => {
    const updatedRows = [...noOfRows];
    const row = updatedRows[index];
    const updatedRow = calculateRowValues(row, row.qty, value);
    updatedRows[index] = updatedRow;
    setNoOfRows(updatedRows);
  };


  function removeRow(i) {
    setNoOfRows(prevRows => prevRows.filter((row, index) => index !== i));
  }




  useEffect(() => {
    fetch(productsData)
      .then((res) => res.text())
      .then((data) => {
        const rows = data.split("\n").slice(1);
        const products = rows.map((row) => {
          const columns = row.split(",");
          return {
            product_name: columns[0],
            hsn_code: columns[1],
            uom: columns[2],
            rate: parseFloat(columns[3]),
            cgst: parseFloat(columns[4]),
            sgst: parseFloat(columns[5]),
          };
        });
        setProducts(products);
      });
  }, []);


  useEffect(() => {
    const { totalAmount, totalDiscAmt, totalTaxableINR, cgstTotal, sgstTotal } = noOfRows.reduce(
      (accumulator, row) => ({
        totalAmount: accumulator.totalAmount + (parseFloat(row.amount) || 0),
        totalDiscAmt: accumulator.totalDiscAmt + (parseFloat(row.discountAmt) || 0),
        totalTaxableINR: accumulator.totalTaxableINR + (parseFloat(row.taxableINR) || 0),
        cgstTotal: accumulator.cgstTotal + (parseFloat(row.cgstAmount) || 0),
        sgstTotal: accumulator.sgstTotal + (parseFloat(row.sgstAmount) || 0)
      }),
      {
        totalAmount: 0,
        totalDiscAmt: 0,
        totalTaxableINR: 0,
        cgstTotal: 0,
        sgstTotal: 0
      }
    );

    setTotal(parseFloat(totalAmount.toFixed(2)));
    setCgstTotal(parseFloat(cgstTotal.toFixed(2)));
    setSgstTotal(parseFloat(sgstTotal.toFixed(2)));
    setTotalTaxableINR(parseFloat(totalTaxableINR.toFixed(2)));
    setTotalDiscountedPrice(parseFloat(totalDiscAmt.toFixed(2)));
  }, [noOfRows]);



  return (
    <>
      <div className="App">


        <h1>Create Tax Invoice</h1>
        <Container>
          <Form onSubmit={handleFormSubmit}>
            <Row>
              <Col>
                <Form.Group controlId="invoiceNo">
                  <Form.Label>Invoice No.</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter invoice no."
                    value={invoiceNo}
                    onChange={(event) => setInvoiceNo(event.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="invoiceDate">
                  <Form.Label>Invoice Date</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Enter invoice date"
                    value={invoiceDate}
                    onChange={(event) => setInvoiceDate(event.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="customerName">
                  <Form.Label>Customer Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter customer name"
                    value={customerName}
                    onChange={(event) => setCustomerName(event.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="customerAddress">
                  <Form.Label>Customer Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter customer address"
                    value={customerAddress}
                    onChange={(event) => setCustomerAddress(event.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="customerMobNo">
                  <Form.Label>Customer Mobile No.</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter customer mobile no."
                    value={customerMobNo}
                    onChange={(event) => setCustomerMobNo(event.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="customerGSTIN">
                  <Form.Label>Customer GSTIN</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter customer GSTIN"
                    value={customerGSTIN}
                    onChange={(event) => setCustomerGSTIN(event.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>


          </Form>
        </Container>

        <div className="productTableWrap">

          <Container>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Sr No.</th>
                  <th>Product</th>
                  <th>HSN Code</th>
                  <th>UOM</th>
                  <th>Quantity</th>
                  <th>Rate(INR)</th>
                  <th>Price</th>
                  <th>Discount</th>
                  <th>Taxable value(INR)</th>
                  <th>CGST %</th>
                  <th>SGST %</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {noOfRows.map((row, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>
                      <Form.Control
                        as="select"
                        value={row.product}
                        onChange={(e) => handleProductChange(e.target.value, i)}
                      >
                        <option value="">Select Product</option>
                        {products.map((product, j) => (
                          <option key={j} value={product.product_name}>
                            {product.product_name}
                          </option>
                        ))}
                      </Form.Control>
                    </td>
                    <td>{row.hsn_code}</td>
                    <td>{row.uom}</td>
                    <td>
                      <Form.Control
                        type="number"
                        value={row.qty}
                        min={1} onChange={(e) => handleQtyChange(e.target.value, i)} >
                      </Form.Control>
                    </td>
                    <td>{row.rate}</td>
                    <td>{row.price}</td>
                    <td >
                      <div style={{ display: "flex", alignItems: 'center' }}>  <Form.Control
                        type="number"
                        value={row.discount}
                        min={0}

                        onChange={(e) => handleDiscChange(e.target.value, i)}
                      >
                      </Form.Control>
                        <span>%</span> </div>
                      <span>(₹ {row.discountAmt})</span>
                    </td>
                    <td>{row.taxableINR}</td>
                    <td>{row.cgst}%
                      <div>₹{row.cgstAmount}</div>
                    </td>
                    <td>{row.sgst}%
                      <div>₹{row.sgstAmount}</div>
                    </td>
                    <td>
                      ₹{row.amount}
                    </td>
                    <td><Button variant="secondary" onClick={() => removeRow(i)}>
                      X</Button></td>
                  </tr>
                ))}

                <tr>
                  <td colSpan={7}></td>
                  <td>{totalDiscountedPrice}</td>
                  <td>{totalTaxableINR}</td>
                  <td>{cgstTotal}</td>
                  <td>{sgstTotal}</td>
                  <td>₹{total}</td>
                </tr>
              </tbody>
            </Table>



          </Container>

          <div className="buttonWrapper">
            <Button variant="primary" onClick={handleAddRow}>
              Add Row
            </Button>
          </div>
          {" "}
          <div className="buttonWrapper">
            <Button variant="primary" onClick={handleSnapshot}>
              Generate Invoice
            </Button>
          </div>
          <div ref={snapshotRef}>
            <Invoice rows={noOfRows} data={[total, cgstTotal, sgstTotal, totalTaxableINR, totalDiscountedPrice]} cd={{ invoiceNo, invoiceDate, customerName, customerAddress, customerMobNo, customerGSTIN }} />

          </div>
        </div>

      </div>
    </>

  );
}

export default App;
