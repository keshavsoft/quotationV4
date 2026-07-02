import buildTable from "./BuildTable/index.js";
import BuildVertical from "./BuildVertical/index.js";

const clickFuncToRun = ({ inCurrentTarget }) => {
    BuildVertical().then();

    buildTable().then();
};

export { clickFuncToRun };