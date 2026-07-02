// createForm.js

import { KSHtmlForm } from "./KSHtmlForm.js";

const createForm = (options) => {
    const formInstance = new KSHtmlForm(options);
    return formInstance.build();
};

export default createForm;