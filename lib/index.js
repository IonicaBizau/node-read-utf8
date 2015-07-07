// Dependencies
var Fs = require("fs");

// Constants
const ENCODING = "utf-8";

/**
 * ReadFile
 *
 * @name ReadFile
 * @function
 * @param {String} path The path to the file.
 * @param  {Function}callback The callback function.
 * @return {String} If the `callback` was not provided, the file content is returned.
 */
function ReadFile(path, callback) {
    if (typeof callback === "function") {
        return Fs.readFile(path, ENCODING, callback);
    }
    return Fs.readFileSync(path, ENCODING);
}

module.exports = ReadFile;
