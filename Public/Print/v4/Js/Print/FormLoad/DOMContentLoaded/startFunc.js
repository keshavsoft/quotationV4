import fetchAsGet from "./FetchAsGet/entryFile.js";
import FetchHead from "./FetchHead/entryFile.js";

const StartFunc = () => {
    fetchAsGet().then();
    FetchHead().then();
};

export { StartFunc };
