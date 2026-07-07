let StartFunc = ({ inResponseAsJson }) => {
    // console.log("inResponseAsJson : ", inResponseAsJson);
    jFLocalToInputInvoiceDateId(inResponseAsJson.InvoiceDate);
    jFLocalToInputBillNumberId(inResponseAsJson.pk);
    jFLocalToInputBuyerNameId(inResponseAsJson.LedgerName);
};

let jFLocalToInputBuyerNameId = (inValue) => {
    let jVarLocalHtmlId = 'BuyerNameId';
    let jVarLocalBuyerNameId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalBuyerNameId === null === false) {
        jVarLocalBuyerNameId.innerHTML = inValue;
    };
};

let jFLocalToInputBillNumberId = (inValue) => {
    let jVarLocalHtmlId = 'BillNumberId';
    let jVarLocalBillNumberId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalBillNumberId === null === false) {
        jVarLocalBillNumberId.innerHTML = inValue;
    };
};

let jFLocalToInputInvoiceDateId = (inValue) => {
    let jVarLocalHtmlId = 'InvoiceDateId';
    let jVarLocalInvoiceDateId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalInvoiceDateId === null === false) {
        jVarLocalInvoiceDateId.innerHTML = inValue;
    };
};

export { StartFunc };
