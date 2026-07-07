const clickFuncToRun = ({ inCurrentTarget }) => {
    const pk = prompt("Enter PK");

    if (pk === null || pk.trim() === "") return;

    window.open(`../../Print/v4/index.html?pk=${pk}`, '_blank');
};

export { clickFuncToRun };