const fs = require("fs");
fs.writeFile("message.txt", "Hello from NodejS!", (err) => 
{
    if (err) throw err;
    console.log("the file has been saved");
});