import { getKSTableConfig } from "./getKSTableConfig.js";

let jFLocalToInputkSHeadContainer = (inValue) => {
    let jVarLocalHtmlId = 'kSHeadContainer';
    let jVarLocalkSHeadContainer = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalkSHeadContainer === null === false) {
        jVarLocalkSHeadContainer.innerHTML = inValue;
    };
};

let jFLocalToInputkSVerticalContainer = (inValue) => {
    let jVarLocalHtmlId = 'kSVerticalContainer';
    let jVarLocalkSVerticalContainer = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalkSVerticalContainer === null === false) {
        jVarLocalkSVerticalContainer.innerHTML = inValue;
    };
};

const startFunc = async () => {
    const config = await getKSTableConfig();

    ksTable1 = new window.ks.classes.compTable(config);
    ksTable1.initShowTable();

    jFLocalToInputkSHeadContainer("");
    jFLocalToInputkSVerticalContainer("");
    // await callKSTable(config);
};

export default startFunc;