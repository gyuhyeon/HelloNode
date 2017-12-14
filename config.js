const config = {
    myClassConfig : {
        yourname : "New User",
        stringsecret : "secretvalue",
        numbersecret : 42
    },
    singlesecret : "hello"
}

unexportedsecret = "useless"; // useless if not "exported".
// to export above...
// module.exports.unexportedsecret = unexportedsecret;
// however, it's better to export a whole Object than to set individual values to export.

module.exports = config;

/* Usage from other files
let conf = require('config');  // if the config.js is not in the same folder, you need to do './child_dir/config.js'(in child dir) or 
                               // '../config.js'(in parent dir) or '../../config.js'(in parent's parent dir), and so on.
console.log(conf.myClassConfig.stringsecret);  // "secretvalue"
console.log(conf.myClassConfig.numbersecret);  // 42
console.log(conf.singlesecret);                // "hello"
console.log(conf.unexportedsecret);            // Uncaught ReferenceError: conf.unexportedsecret is not defined
*/