const fs = require("fs");

const text = fs.readFileSync("../1-node-farm/starter/txt/input.txt", "utf-8");
// console.log(text);

const twrite = `This is what we know: ${text}. \nCreated on ${Date.now()}`;
console.log(twrite);

fs.writeFileSync("../1-node-farm/starter/txt/output.txt", twrite);
