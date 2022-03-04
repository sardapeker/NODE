const fs = require("fs");
const path = require("path");


//fs.mkdirSync(path.resolve(__dirname, "dir"));

fs.WriteFile(path.resolve(__dirname, "text.txt"), 'Ali Veli 1 2 3', (err) => {
    if(err){
        console.log(err)
    }
})




