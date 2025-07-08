// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// For example- these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf
// 4. naseem.zip
// 5. rauf.zip
// 6. cat.jpg
// 7. likhlo.pdf

// this:
// jpg/name.jpg, jpg/cat.jpg
// png/name.png
// pdf/this.pdf, pdf/likhlo.pdf
// zip/naseem.zip, zip/rauf.zip

import fs from "fs/promises"
import fsn from "fs"

let files = await fs.readdir("C:\\Users\\ADMIN\\OneDrive\\Desktop\\Web Development -2024\\video 93 S_E15")
console.log(files);

let extensions = []
for (const item of files) {
    let ext = item.split(".")[item.split(".").length-1]
    console.log(ext);
    if(fsn.existsSync(ext)){
        // Move the file to this directory
        fs.rename()
    }
    else{
        fs.mkdir(ext)
    }

    console.log(item);
}