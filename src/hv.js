import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Table, Button, Form } from "react-bootstrap";
import Papa from "papaparse";

import productsData from "./pd.csv";

function App() {
    const [products, setProducts] = useState([]);
    const [noOfRows, setNoOfRows] = useState([]);
    const [total, setTotal] = useState(0);

 
    console.table(products)
    const handleAddRow = () => {
        setNoOfRows([...noOfRows, {}]);
    };

    const handleProductChange = (value, index) => {
        const selectedProduct = products.find(
            (product) => product.product_name === value
        );
        const updatedRows = [...noOfRows];
        updatedRows[index] = {
            ...updatedRows[index],
            product: selectedProduct.product_name,
            hsn_code: selectedProduct.hsn_code,
            uom: selectedProduct.uom,
            rate: selectedProduct.rate,
            cgst: selectedProduct.cgst,
            sgst: selectedProduct.sgst,
        };
        setNoOfRows(updatedRows);
    };

    const handleQtyChange = (value, index) => {
        const updatedRows = [...noOfRows];
        updatedRows[index] = {
            ...updatedRows[index],
            qty: parseInt(value),
            amount: parseInt(value) * updatedRows[index].rate,
        };
        setNoOfRows(updatedRows);
    };


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
        let totalAmount = 0;
        noOfRows.forEach((row) => {
            totalAmount += row.amount ? row.amount : 0;
        });
        setTotal(totalAmount);
    }, [noOfRows]);

    return (
        <div className="App">
            <h1>Create Tax Invoice</h1>
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Sr No.</th>
                            <th>Product</th>
                            <th>HSN Code</th>
                            <th>UOM</th>
                            <th>Qty</th>
                            <th>Rate(INR)</th>
                            <th>Price</th>
                            <th>Discount</th>
                            <th>Taxable value(INR)</th>
                            <th>CGST %</th>
                            <th>SGST %</th>
                            <th>Amount</th>
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
                                        min={1}>
                                    </Form.Control>
                                </td>
                                <td>{row.amount}</td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={10}></td>
                            <td>Total</td>
                            <td>{total.toFixed(2)}</td>
                        </tr>
                    </tbody>
                </Table>
                <Button variant="primary" onClick={handleAddRow}>
                    Add Row
                </Button>
            </Container>
        </div>
    );
}

export default App;
