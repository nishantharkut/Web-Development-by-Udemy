const fs = require("fs");

// fs.writeFile("message.txt", "Hello from Nishant!", (err)=>{
//     if (err) throw err;
//     console.log("the file has been saved");
// });

// fs.readFile(path, [options], callback)

fs.readFile("./message.txt", "utf8",(err, data) => {
  if (err) throw err;
  console.log(data);
});