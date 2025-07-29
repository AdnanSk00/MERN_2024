console.log("Script.js initializing");

// // let boxes = document.getElementsByClassName("box")
// // let boxes = document.querySelectorAll(".box");

// let boxes = document.querySelector(".container").children;
// console.log(boxes)

// function getRandomColor(){
//     let val1 = Math.ceil(0 + Math.random() * 255);
//     let val2 = Math.ceil(0 + Math.random() * 255);
//     let val3 = Math.ceil(0 + Math.random() * 255);
//     console.log(`${val1}, ${val2}, ${val3}`)
//     return `rgb(${val1}, ${val2}, ${val3})`
// }

// Array.from(boxes).forEach(e=>{
//     console.log(e)
// })
// Array.from(boxes).forEach(e=>{  
//     e.style.backgroundColor = getRandomColor()
//     e.style.color = getRandomColor() 
//     // e.textContent = getRandomColor()
//     // e.innerText = getRandomColor()
// })



// Shotout Code :-

var boxes = document.querySelectorAll(".box");
console.log(boxes);

for(var i = 0; i < boxes.length; i++){
    var box = boxes[i];
    console.log(box);

    // Generate random color (16777215 is white in Decimal)
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

    // Generate random background color 
    var randomBackgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);

    // Assign random color and background
    box.style.color = randomColor;
    box.style.backgroundColor = randomBackgroundColor;

    // Set content to show color code
    box.textContent = randomColor;
}
document.body.style.backgroundColor = "";