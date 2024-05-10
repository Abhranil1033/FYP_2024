// import DataURIParser from "datauri/parser.js";
import DataURIParser from "datauri/parser.js";


const getDataUri = (file) => {
    const parser = new DataURIParser();

    const extName = path.extname(file.originalname).toString();

    console.log(extName);

    // return parser.format(extName,recfile.buffer);
    return parser.format(extName,file.content);
}

export default getDataUri;