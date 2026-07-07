import verticalHtmlId from "./verticalHtmlId/start.js";

import ShowAllHtmlId from "./ShowAllHtmlId/start.js";

import LastHtmlId from "./LastHtmlId/start.js";
import FindHtmlId from "./FindHtmlId/start.js";
import PrintHtmlId from "./PrintHtmlId/start.js";

const hookAllListeners = () => {
    verticalHtmlId();
    ShowAllHtmlId();

    LastHtmlId();
    FindHtmlId();
    PrintHtmlId();
};

export { hookAllListeners };