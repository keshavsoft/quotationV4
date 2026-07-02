class KSHtmlForm {
    constructor({
        showSaveButton = false,
        inDefaultRow,
        onSubmit,
        uiClasses = {},
        inIsDisabled,
        inVisibleColumnsConfig = [],
        inGetDataLists,
        inServices,
        inConfig,
        inSearchableColumnsConfig,
        inShowButton,
        inDataStore
    }) {
        this.showSaveButton = showSaveButton;
        this.defaultRow = inDefaultRow || {};
        this.onSubmit = onSubmit;
        this.uiClasses = uiClasses || {};
        this.isDisabled = inIsDisabled;
        this.visibleColumnsConfig = inVisibleColumnsConfig || [];
        this.getDataLists = inGetDataLists;
        this.services = inServices;
        this.config = inConfig;
        this.searchableColumnsConfig = inSearchableColumnsConfig || [];
        this.showButton = inShowButton;
        this.dataStore = inDataStore;

        this.inputs = {};
        this.formElement = null;
        this.fieldsetElement = null;
    }

    build() {
        this.formElement = document.createElement("form");

        this.fieldsetElement = document.createElement("fieldset");
        this.fieldsetElement.className = this.uiClasses.formClass || 'grid grid-cols-3 gap-x-8 gap-y-4 p-6 verticalForm';
        this.fieldsetElement.disabled = this.isDisabled;

        this.formElement.appendChild(this.fieldsetElement);

        this.appendInputRows();

        if (this.showSaveButton) {
            this.appendSaveButton();
        }

        return this.formElement;
    }

    appendInputRows() {
        this.searchableColumnsConfig.forEach(col => {
            const row = this.createInputRow(col);
            if (row) {
                this.fieldsetElement.appendChild(row);
            }
        });
    }

    createInputRow(inCol) {
        const col = inCol.columnName;
        const dataListFillName = inCol.dataListFillName;

        let row;

        if ("verticalConfig" in inCol) {
            if ("dataListSource" in inCol) {
                row = this.createDataListInput(inCol);
            } else {
                row = this.createDefaultInput({
                    inCol,
                    inDataListFillName: dataListFillName,
                    inType: "type" in inCol ? inCol.type : ""
                });
            }
        } else {
            switch (col) {
                case "LedgerName":
                    row = this.createDataListInput(inCol);
                    break;
                case "InvoiceDate":
                    row = document.createElement("ks-input");
                    row.setAttribute("label", "InvoiceDate");
                    row.setAttribute("name", "InvoiceDate");
                    row.setAttribute("type", "date");
                    this.inputs[col] = row;
                    break;
                default:
                    row = this.createDefaultInput({ inCol });
                    break;
            }
        }

        return row;
    }

    createDataListInput(inCol) {
        const col = inCol.columnName;
        const row = document.createElement("ks-datalist-input");

        const defaultValue = col in this.defaultRow ? this.defaultRow[col] : "";
        row.setAttribute("label", inCol.title);
        row.setAttribute("ksName", col);
        row.setAttribute("list", `${col}List`);
        row.setAttribute("source", col);
        row.setAttribute("ksInValue", defaultValue);
        row.setAttribute("ksDataListSource", inCol.dataListSource);

        row.dataStore = this.dataStore;
        this.inputs[col] = row;

        return row;
    }

    createDefaultInput({ inCol, inDataListFillName, inType }) {
        const col = inCol.columnName;
        const row = document.createElement("ks-input");

        const defaultValue = col in this.defaultRow ? this.defaultRow[col] : "";

        row.setAttribute("label", inCol.title);
        row.setAttribute("ksName", col);
        row.setAttribute("source", col);
        if (inType !== undefined) {
            row.setAttribute("type", inType);
        }

        if (defaultValue) {
            row.setAttribute("ksInValue", defaultValue);
        }

        if (inCol?.verticalConfig) {
            if ("allowOnChange" in inCol.verticalConfig) {
                row.setAttribute("ksAllowOnChange", inCol.verticalConfig.allowOnChange);
            }
            if ("onKeyDownType" in inCol.verticalConfig) {
                row.setAttribute("ksOnKeyDownType", inCol.verticalConfig.onKeyDownType);
            }
        }

        if (inDataListFillName) {
            row.setAttribute("ksDataListFillName", inDataListFillName);
        }

        row.dataStore = this.dataStore;
        this.inputs[col] = row;

        return row;
    }

    appendSaveButton() {
        const button = document.createElement("ks-button");

        button.onClick = async (data) => {
            const fromService = await this.services.actionsFetchOnly.create({
                inEndPoint: this.config.endPoints.create,
                payload: data
            });

            this.config.callbacks.vertical.onSuccess(fromService);
        };

        this.formElement.appendChild(button);
    }
}

export { KSHtmlForm };
