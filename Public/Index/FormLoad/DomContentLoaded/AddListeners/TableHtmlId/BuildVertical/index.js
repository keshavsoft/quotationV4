import { getKSTableConfig } from "./getKSTableConfig.js";

const startFunc = async () => {
    const config = await getKSTableConfig();
    // console.log("aaaaa----------- : ", config);

    ksVertical1 = new window.KSAiVertical(config);

    await ksVertical1.initCreate();   // ✅ THIS is missing
};

export default startFunc;