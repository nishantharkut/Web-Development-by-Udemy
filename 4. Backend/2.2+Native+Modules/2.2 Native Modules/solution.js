const fs = require("fs");

fs.writeFile("new.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

fs.readFile("new.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
