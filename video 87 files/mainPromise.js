import fs from "fs/promises"

let a = await fs.readFile("adnan.txt")

// let b = await fs.writeFile("adnan.txt", "\n\n\n\nThis is amazing promise")
let b = await fs.appendFile("adnan.txt", "\n\n\n\nThis is amazing promise")
console.log(a.toString(), b);