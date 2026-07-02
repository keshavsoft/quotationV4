import { getKSTableConfig } from "./getKSTableConfig.js";

const startFunc = async () => {
    const config = await getKSTableConfig();
    console.log("aaaaa : ", config);

    window?.KSVertical?.initCreate(config);
};

export default startFunc;