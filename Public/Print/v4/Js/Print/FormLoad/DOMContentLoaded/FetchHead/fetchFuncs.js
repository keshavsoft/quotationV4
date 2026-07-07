import getUrlJson from './getUrl.json' with {type: 'json'};

let StartFunc = async () => {
    const ParentPk = getUrlQueryParams({ inGetKey: "pk" });

    getUrlJson.GetEndPoint = getUrlJson.GetEndPoint.replace("<ParentPk>", ParentPk);

    let response = await fetch(getUrlJson.GetEndPoint);

    return await response;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };