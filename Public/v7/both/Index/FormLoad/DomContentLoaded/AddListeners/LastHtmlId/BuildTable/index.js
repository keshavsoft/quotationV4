// import { getKSTableConfig } from "./getKSTableConfig.js";

let jFLocalToInputhtmlId = (inValue) => {
    let jVarLocalHtmlId = 'htmlId';
    let jVarLocalhtmlId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalhtmlId === null === false) {
        jVarLocalhtmlId.innerHTML = inValue;
    };
};

const itemsTableConfig = async (inPk) => {
    const config = await fetch("./Index/Configs/find/itemsConfig.json");
    // debugger;
    const configJson = await config.json();
    // debugger;
    const pk = inPk;

    const findColumn = configJson.columnsConfig.find(element => {
        return element.field === "ParentPk"
    });

    findColumn.defaultValue = parseInt(pk);

    configJson.endPoints.read = configJson.endPoints.read.replace("<ParentPk>", pk);

    return configJson;
};

const getVerticalConfig = async () => {
    const config = await fetch("./Index/Configs/last/config.json");
    // debugger;
    const configJson = await config.json();

    return configJson;
};

const startFunc = async () => {
    const config = await getVerticalConfig();

    ksVertical = new window.ks.classes.vertical(config);
    await ksVertical.initCreate();
    // debugger
    const verticalData = ksVertical.dataStore.getFindFromParams();
    const pk = verticalData.pk;

    jFLocalToInputhtmlId(pk);

    const itemsConfig = await itemsTableConfig(pk);

    itemsConfig.callbacks.table.body.update = fromService => {
        console.log("----- : ", fromService);
    };

    ksTable1 = new window.ks.classes.compTable(itemsConfig);

    ksTable1.initShowTable();
};

export default startFunc;