import createDataListInput from "./UsingComp/createDataListInput.js";
import defaultInput from "./UsingComp/defaultInput.js";

const createInputRow = ({
    inCol,
    inDefaultRow,
    inDataListSource,
    inDataStore
}) => {
    const col = inCol.columnName;
    const dataListFillName = inCol.dataListFillName;
    // console.log("caught----------", inCol);

    let row;

    if ("verticalConfig" in inCol) {
        if ("dataListSource" in inCol) {
            return createDataListInput({ inCol, inDefaultRow, inDataListSource, inDataStore });
        } else {
            return defaultInput({
                inCol, inDefaultRow, inDataStore,
                inDataListFillName: dataListFillName,
                inType: "type" in inCol ? inCol?.type : ""
            });
        };
    } else {
        switch (col) {
            case "LedgerName":
                return createDataListInput({ inCol, inDefaultRow, inDataListSource, inDataStore });

                break;
            case "InvoiceDate":
                row = document.createElement("ks-input");

                row.setAttribute("label", "InvoiceDate");
                row.setAttribute("name", "InvoiceDate");
                row.setAttribute("type", "date");

                return row;
                break;

            default:
                return defaultInput({ inCol, inDefaultRow, inDataStore });

                break;
        };

    };
};

export { createInputRow };
