var fs = require("fs");

//create an empty file named mynewfile2.txt:
fs.appendFile("mynewfile1.txt", "This is appended text", function(err, file) {
    if (err) {
        throw err;
    }
    console.log("Updated!")
})