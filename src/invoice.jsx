import "./invoice.css"
import img1 from "../src/resources/drawing0.png"
import img2 from "../src/resources/drawing1.png"
const numberToWords = require('number-to-words');

export default function ({ rows, data,cd }) {
    return (
        <>
            <div className="ritz grid-container" dir="ltr">
                <table className="waffle" cellSpacing={0} cellPadding={0}>
                    <thead>
                        <tr>
                            <th className="row-header freezebar-origin-ltr" />
                            <th
                                id="2116536373C0"
                                style={{ border: 'none', width: 60 }}
                                className="column-headers-background"
                            >

                            </th>
                            <th
                                id="2116536373C1"
                                style={{ border: 'none', width: 60 }}
                                className="column-headers-background"
                            >

                            </th>
                            <th
                                id="2116536373C2"
                                style={{ border: 'none', width: 60 }}
                                className="column-headers-background"
                            >

                            </th>
                            <th
                                id="2116536373C3"
                                style={{ border: 'none', width: 60 }}
                                className="column-headers-background"
                            >

                            </th>
                            <th
                                id="2116536373C4"
                                style={{ border: 'none', width: 62 }}
                                className="column-headers-background"
                            >

                            </th>
                            <th
                                id="2116536373C5"
                                style={{ border: 'none', width: 62 }}
                                className="column-headers-background"
                            >

                            </th>
                            <th
                                id="2116536373C6"
                                style={{ border: 'none', width: 62 }}
                                className="column-headers-background"
                            >

                            </th>
                            <th
                                id="2116536373C7"
                                style={{ border: 'none', width: 67 }}
                                className="column-headers-background"
                            >

                            </th>
                            <th
                                id="2116536373C8"
                                style={{ border: 'none', width: 62 }}
                                className="column-headers-background"
                            >

                            </th>
                            <th
                                id="2116536373C9"
                                style={{ border: 'none', width: 40 }}
                                className="column-headers-background"
                            >

                            </th>
                            <th
                                id="2116536373C10"
                                style={{ border: 'none', width: 40 }}
                                className="column-headers-background"
                            >

                            </th>
                            <th
                                id="2116536373C11"
                                style={{ border: 'none', width: 62 }}
                                className="column-headers-background"
                            >
                            </th>
                            <th
                                id="2116536373C12"
                                style={{ border: 'none', width: 60 }}
                                className="column-headers-background"
                            >

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ border: 'none', height: 18 }}>
                            <th
                                id="2116536373R0"
                                style={{ border: 'none', height: 18 }}
                                className="row-headers-background"
                            >
                                <div className="row-header-wrapper" >

                                </div>
                            </th>
                            <td className="s0 softmerge">
                                <div
                                    className="softmerge-inner"
                                    style={{ border: 'none', width: 177, left: "-1px" }}
                                >
                                    GSTIN: 27ABCDE1234F5GH
                                </div>
                            </td>
                            <td className="s1" />
                            <td className="s2" />
                            <td className="s3" colSpan={5} style={{ border: 'none', padding: '0', height: '10px' }}>
                                TAX INVOICE
                            </td>
                            <td className="s4" />
                            <td className="s5" />
                            <td className="s5" />
                            <td className="s4" />
                            <td />
                        </tr>
                        <tr style={{ border: 'none', height: 18 }}>
                            <th
                                id="2116536373R1"
                                style={{ border: 'none', height: 18 }}
                                className="row-headers-background"
                            >
                                <div className="row-header-wrapper" style={{ border: 'none', lineHeight: 0 }}>

                                </div>
                            </th>
                            <td className="s6" />
                            <td />
                            <td />
                            <td className="s3" />
                            <td className="s3" />
                            <td className="s3" />
                            <td className="s3" />
                            <td className="s3" />
                            <td className="s4" />
                            <td className="s5" />
                            <td className="s5" />
                            <td className="s4" />
                            <td />
                        </tr>
                        <tr style={{ border: 'none', height: 103 }}>
                            <th
                                id="2116536373R2"
                                style={{ border: 'none', height: 103 }}
                                className="row-headers-background"
                            >
                                <div className="row-header-wrapper" style={{ border: 'none', lineHeight: 0 }}>

                                </div>
                            </th>
                            <td className="s3" colSpan={2}>  <img
                                src={img1}
                                style={{ border: 'none', display: "block" }}
                                height={84}
                                width={125}
                            /></td>
                            <td className="s7" />
                            <td className="s7" colSpan={5}>
                                <span
                                    style={{
                                        border: 'none',
                                        fontSize: "16pt",
                                        fontFamily: "Arial Black,Arial",
                                        fontWeight: "bold",
                                        color: "#000000"
                                    }}
                                >
                                    RETAIL OUTLET STORE
                                </span>
                                <span
                                    style={{
                                        border: 'none',
                                        fontSize: "11pt",
                                        fontFamily: "Calibri,Arial",
                                        color: "#000000"
                                    }}
                                >
                                    <br />
                                    12/34 Mall Road, Mumbai
                                    <br />
                                    Maharashtra - 400001
                                    <br />
                                    Tel : +91-9876543210
                                    <br />
                                    Email : retailoutlets@gmail.com
                                </span>
                            </td>
                            <td className="s7" />
                            <td className="s7" colSpan={3} >  <img
                                src={img2}
                                style={{ border: 'none', display: "block" }}
                                height={84}
                                width={125}
                            /></td>
                            <td />
                        </tr>
                        <tr style={{ border: 'none', height: 18 }}>
                            <th
                                id="2116536373R3"
                                style={{ border: 'none', height: 18 }}
                                className="row-headers-background"
                            >
                                <div className="row-header-wrapper" style={{ border: 'none', lineHeight: 0 }}>

                                </div>
                            </th>
                            <td className="s8" />
                            <td className="s8" />
                            <td className="s8" />
                            <td className="s8" />
                            <td className="s8" />
                            <td className="s8" />
                            <td className="s8" />
                            <td className="s8" />
                            <td className="s8" />
                            <td className="s9" />
                            <td className="s9" />
                            <td className="s8" />
                            <td />
                        </tr>
                        <tr style={{ border: 'none', height: 151 }}>
                            <th
                                id="2116536373R4"
                                style={{ border: 'none', height: 151 }}
                                className="row-headers-background"
                            >
                                <div className="row-header-wrapper" style={{ border: 'none', lineHeight: 0 }}>

                                </div>
                            </th>
                            <td className="s10" colSpan={6}>
                                <span
                                    style={{
                                        border: 'none',
                                        fontSize: "12pt",
                                        fontFamily: "Calibri,Arial",
                                        fontWeight: "bold",
                                        fontStyle: "italic",
                                        color: "#000000"
                                    }}
                                >
                                    Party Details :
                                </span>
                                <span
                                    style={{
                                        border: 'none',
                                        fontSize: "11pt",
                                        fontFamily: "Calibri,Arial",
                                        color: "#000000"
                                    }}
                                >
                                    <br />
                                    {cd.customerName}
                                    <br />
                                    {cd.customerAddress}
                                    <br />
                                    <br />
                                    Party PAN : VWXYZ1234U
                                    <br />
                                    Party Tel :  {cd.customerMobNo}
                                    <br />
                                    Party GSTIN / UIN : {cd.customerGSTIN}
                                </span>
                            </td>
                            <td className="s10" colSpan={6}>
                                Invoice No. :  {cd.invoiceNo}
                                <br />
                                Invoice Date : {cd.invoiceDate}
                                <br />
                                Date of Supply : 27/03/2023
                                <br />
                                Place of Supply : MAHARASHTRA (27)
                                <br />
                                Reverse Charge : N<br />
                                Transport Mode : BY ROAD
                                <br />
                                Vehicle No. : MH01AA1234
                            </td>
                            <td />
                        </tr>
                        <tr style={{ border: 'none', height: 18 }}>
                            <th
                                id="2116536373R5"
                                style={{ border: 'none', height: 18 }}
                                className="row-headers-background"
                            >
                                <div className="row-header-wrapper" style={{ border: 'none', lineHeight: 0 }}>

                                </div>
                            </th>
                            <td className="s8" />
                            <td className="s8" />
                            <td className="s8" />
                            <td className="s8" />
                            <td className="s8" />
                            <td className="s8" />
                            <td className="s8" />
                            <td className="s8" />
                            <td className="s8" />
                            <td className="s9" />
                            <td className="s9" />
                            <td className="s8" />
                            <td />
                        </tr>
                        <tr style={{ border: 'none', height: 18 }}>
                            <th
                                id="2116536373R6"
                                style={{ border: 'none', height: 18 }}
                                className="row-headers-background"
                            >
                                <div className="row-header-wrapper" style={{ border: 'none', lineHeight: 0 }}>

                                </div>
                            </th>
                            <td className="s11">SR. NO.</td>
                            <td className="s11">PRODUCT</td>
                            <td className="s11">HSN Code</td>
                            <td className="s11">UOM</td>
                            <td className="s11">QTY</td>
                            <td className="s11">RATE (INR)</td>
                            <td className="s11">PRICE (INR)</td>
                            <td className="s11">DISCOUNT (INR)</td>
                            <td className="s11">TAXABLE VALUE (INR)</td>
                            <td className="s11">CGST</td>
                            <td className="s11">SGST</td>
                            <td className="s11">AMOUNT (INR)</td>
                            <td />
                        </tr>

                        {rows.map((row, index) => (
                            <tr key={index}>
                                <th
                                    id="2116536373R7"
                                    style={{ border: 'none', height: 18 }}
                                    className="row-headers-background"
                                >
                                    <div className="row-header-wrapper" style={{ border: 'none', lineHeight: 0 }}>

                                    </div>
                                </th>
                                <td className="s12">{index + 1}</td>
                                <td className="s12">{row.product}</td>
                                <td className="s12">{row.hsn_code}</td>
                                <td className="s12">{row.uom}</td>
                                <td className="s12">{row.qty}</td>
                                <td className="s12">{row.rate}</td>
                                <td className="s12">{row.price}</td>
                                <td className="s12">
                                    <div>{row.discountAmt}</div>
                                    <div>({row.discount}%)</div></td>
                                <td className="s12">{row.taxableINR}</td>
                                <td className="s12"> <div>{row.cgstAmount}</div>
                                    <div>({row.cgst}%)</div></td>
                                <td className="s12"> <div>{row.sgstAmount}</div>
                                    <div>({row.sgst}%)</div></td>
                                <td className="s12">{row.amount}</td>

                            </tr>
                        ))}

                        <tr style={{ border: 'none', height: 18 }}>
                            <th
                                id="2116536373R9"
                                style={{ border: 'none', height: 18 }}
                                className="row-headers-background"
                            >
                                <div className="row-header-wrapper" style={{ border: 'none', lineHeight: 0 }}>
                                    1
                                </div>
                            </th>
                            <td className="s17" colSpan={7}>
                                SUBTOTAL
                            </td>
                            <td className="s18">{data[4]}</td>
                            <td className="s18">{data[3]}</td>
                            <td className="s19">{data[1]}</td>
                            <td className="s19">{data[2]}</td>
                            <td className="s20">{data[0]}</td>
                            <td />
                        </tr>
                        <tr style={{ border: 'none', height: 18 }}>
                            <th
                                id="2116536373R10"
                                style={{ border: 'none', height: 18 }}
                                className="row-headers-background"
                            >
                                <div className="row-header-wrapper" style={{ border: 'none', lineHeight: 0 }}>
                                    1
                                </div>
                            </th>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td className="s4" />
                            <td className="s4" />
                            <td className="s4" />
                            <td className="s4" />
                            <td className="s4" />
                            <td className="s5" />
                            <td className="s5" />
                            <td className="s4" />
                            <td />
                        </tr>
                        <tr style={{ border: 'none', height: 18 }}>
                            <th
                                id="2116536373R11"
                                style={{ border: 'none', height: 18 }}
                                className="row-headers-background"
                            >
                                <div className="row-header-wrapper" style={{ border: 'none', lineHeight: 0 }}>
                                    1
                                </div>
                            </th>
                            <td className="s21 softmerge">
                                <div
                                    className="softmerge-inner"
                                    style={{ border: 'none', width: 238, left: "-1px" }}
                                >
                                    Total Invoice Amount (in figures) :
                                </div>
                            </td>
                            <td className="s1" />
                            <td className="s1" />
                            <td className="s2" />
                            <td className="s22">₹ {data[0]}</td>
                            <td className="s4" />
                            <td className="s4" />
                            <td className="s4" />
                            <td className="s4" />
                            <td className="s5" />
                            <td className="s5" />
                            <td className="s4" />
                            <td />
                        </tr>
                        <tr style={{ border: 'none', height: 18 }}>
                            <th
                                id="2116536373R12"
                                style={{ border: 'none', height: 18 }}
                                className="row-headers-background"
                            >
                                <div className="row-header-wrapper" style={{ border: 'none', lineHeight: 0 }}>
                                    1
                                </div>
                            </th>
                            <td className="s21 softmerge">
                                <div
                                    className="softmerge-inner"
                                    style={{ border: 'none', width: 238, left: "-1px" }}
                                >
                                    Total Invoice Amount (in words) :
                                </div>
                            </td>
                            <td className="s1" />
                            <td className="s1" />
                            <td className="s2" />
                            <td className="s23 softmerge">
                                <div
                                    className="softmerge-inner"
                                    style={{ border: 'none', width: 455, left: "-1px" }}
                                >
                                    Rupees{" "}
                                    {numberToWords.toWords(data[0])} only

                                </div>
                            </td>
                            <td className="s24" />
                            <td className="s24" />
                            <td className="s24" />
                            <td className="s24" />
                            <td className="s25" />
                            <td className="s25" />
                            <td className="s26" />
                            <td className="s2" />
                        </tr>
                        <tr style={{ border: 'none', height: 63 }}>
                            <th
                                id="2116536373R13"
                                style={{ border: 'none', height: 63 }}
                                className="row-headers-background"
                            >
                                <div className="row-header-wrapper" style={{ border: 'none', lineHeight: 0 }}>
                                    1
                                </div>
                            </th>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td className="s4" />
                            <td className="s4" />
                            <td className="s4" />
                            <td className="s4" />
                            <td className="s4" />
                            <td className="s5" />
                            <td className="s5" />
                            <td className="s4" />
                            <td />
                        </tr>
                        <tr style={{ border: 'none', height: 45 }}>
                            <th
                                id="2116536373R14"
                                style={{ border: 'none', height: 45 }}
                                className="row-headers-background"
                            >
                                <div className="row-header-wrapper" style={{ border: 'none', lineHeight: 0 }}>
                                    1
                                </div>
                            </th>
                            <td className="s27" colSpan={6} rowSpan={4}>
                                <span
                                    style={{
                                        border: 'none',
                                        fontSize: "10pt",
                                        fontFamily: "Calibri,Arial",
                                        fontWeight: "bold",
                                        textDecoration: "underline",
                                        WebkitTextDecorationSkip: "none",
                                        textDecorationSkipInk: "none",
                                        color: "#000000"
                                    }}
                                >
                                    Terms &amp; Conditions
                                    <br />
                                </span>
                                <span
                                    style={{
                                        border: 'none',
                                        fontSize: "10pt",
                                        fontFamily: "Calibri,Arial",
                                        color: "#000000"
                                    }}
                                >
                                    E.&amp; O.E.
                                    <br />
                                    1. GOODS ONCE SOLD WILL NOT BE EXCHANGE/RETURNED AFTER 7 DAYS
                                    <br />
                                    2. INTEREST @18%P.A. WILL BE CHARGED AFTER 30 DAYS FROM BILL
                                    <br />
                                    3. ALL DISPUTES SUBJECT TO MUMBAI JUSRISDICTION
                                </span>
                            </td>
                            <td className="s28" colSpan={6}>
                                {" "}
                                Receiver's Signature :
                            </td>
                            <td />
                        </tr>
                        <tr style={{ border: 'none', height: 18 }}>
                            <th
                                id="2116536373R15"
                                style={{ border: 'none', height: 18 }}
                                className="row-headers-background"
                            >
                                <div className="row-header-wrapper" style={{ border: 'none', lineHeight: 0 }}>
                                    1
                                </div>
                            </th>
                            <td className="s29" colSpan={6} rowSpan={3}>
                                for RETAIL OUTLET STORE
                                <br />
                                <br />
                                Authorised Signatory
                            </td>
                            <td />
                        </tr>
                        <tr style={{ border: 'none', height: 18 }}>
                            <th
                                id="2116536373R16"
                                style={{ border: 'none', height: 18 }}
                                className="row-headers-background"
                            >
                                <div className="row-header-wrapper" style={{ border: 'none', lineHeight: 0 }}>
                                    1
                                </div>
                            </th>
                            <td />
                        </tr>
                        <tr style={{ border: 'none', height: 30 }}>
                            <th
                                id="2116536373R17"
                                style={{ border: 'none', height: 30 }}
                                className="row-headers-background"
                            >
                                <div className="row-header-wrapper" style={{ border: 'none', lineHeight: 0 }}>
                                    1
                                </div>
                            </th>
                            <td />
                        </tr>
                    </tbody>
                </table>
            </div>

        </>

    )
}
