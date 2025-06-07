import DataURIParser from 'datauri/parser.js';
import path from 'path';

const parser = new DataURIParser();

const getDataUri = (file) => {
    if (!file || !file.originalname || !file.buffer) {
        throw new Error("Invalid file object passed to getDataUri");
    }

    return parser.format(path.extname(file.originalname), file.buffer).content;
};

export default getDataUri;
