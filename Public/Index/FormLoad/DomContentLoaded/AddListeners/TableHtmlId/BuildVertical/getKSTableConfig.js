export const getKSTableConfig = async () => {

    const config = await fetch("./Index/Configs/Table/verticalConfig.json");
    // debugger;
    const configJson = await config.json();

    configJson.callbacks.vertical.onSuccess = (fromService) => {
        console.log("fromService : ", fromService);
    };

    return configJson;
};