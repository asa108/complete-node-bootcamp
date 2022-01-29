const fs = require("fs");
const http = require("http");

// Blocking, synchrones way
const text = fs.readFileSync("../1-node-farm/starter/txt/input.txt", "utf-8");
const twrite = `This is what we know: ${text}. \nCreated on ${Date.now()}`;
fs.writeFileSync("../1-node-farm/starter/txt/output.txt", twrite);

// Non-Blocking, asynchrones way
// fs.readFile('./starter/txt/start.txt', 'utf-8',(err,data1) => {
//    fs.readFile(`../1-node-farm/starter/txt/${data1}.txt`, "utf-8", (err, data2) => {
//        console.log(data2);
//           fs.readFile(
//             '../1-node-farm/starter/txt/append.txt',
//             "utf-8",
//             (err, data3) => {
//                 console.log(data3);

//                 fs.writeFile('../1-node-farm/starter/txt/final.txt',`${data2}\n${data3}`, 'utf-8', err => {
//                     console.log('file wrote')
//                 })
//             }
//           );
//    });
// })
// console.log('Will read file')

// ------------------------------------ Server
const server = http.createServer((req, res) => {
  res.end("Hello from server");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});