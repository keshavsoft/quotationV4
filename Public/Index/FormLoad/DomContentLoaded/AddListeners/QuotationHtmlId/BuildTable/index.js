import { getKSTableConfig } from "./getKSTableConfig.js";
import { callKSTable } from "./callKSTable.js";

const startFunc = async () => {
    const config = await getKSTableConfig();

    window?.KSVertical?.initCreate(config);
};

export default startFunc;