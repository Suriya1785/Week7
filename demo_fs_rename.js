fs = require("fs");

fs.rename("mynewfile1.txt", "vanessDana.txt", function(err) {
    if (err) {
        throw err;
    }
    console.log("File renamed");
})