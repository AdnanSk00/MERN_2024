const fs = require("fs")
// const fs = require("fs/promises")

// console.log(fs);

console.log("starting");
// fs.writeFileSync("adnan.txt", "Adnan is a good boy !")

fs.writeFile("adnan2.txt", "Adnan is fine 2", ()=>{
    console.log("done");
    fs.readFile("adnan2.txt", (error, data)=>{
        // console.log(error, data);
        console.log(error, data.toString());
    })
})

fs.appendFile("adnan.txt", "addyrobo", (e,d)=>{
    console.log(d);
})

console.log("ending");