var fs = require("fs");

//create an empty file named mynewfile2.txt:
fs.writeFile("mynewfile3.txt", "This is my text", function(err, file) {
    if (err) {
        throw err;
    }
    console.log("Replaced!")
})