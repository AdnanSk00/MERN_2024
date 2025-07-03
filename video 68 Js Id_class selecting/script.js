console.log("AdnanSk");

let boxes = document.getElementsByClassName("box")
console.log(boxes)

boxes[2].style.backgroundColor = "red"
// document.getElementsByClassName("box")[2].style.backgroundColor = "red";

let id_box = document.getElementById("redbox")
console.log(id_box);
document.getElementById("redbox").style.backgroundColor = "crimson";
// id_box.style.backgroundColor = "crimson"

// document.querySelector(".box").style.backgroundColor = "green"
// Note :- above returns first element which matched with .box selector.

console.log(document.querySelectorAll(".box"))                      
// Note :- above returns NodeList having all elements of .box class instead of returning only first element of .box selector.

// document.querySelectorAll(".box").style.backgroundColor = "green"
// Above can not style like this on querySelectorAll
document.querySelectorAll(".box").forEach(all_div =>{
    console.log(all_div)
    all_div.style.backgroundColor = "green"
})

console.log(document.getElementsByTagName("div"))
// Note :- above returns HTMLCollection of all element having div tag.

console.log(document.querySelector("div"));

// Matches method :-
let e = document.getElementsByTagName("div")
console.log(e[4].matches("#redbox"))
console.log(e[3].matches("#redbox"))
console.log(e[3].matches(".box"))

// Closest method :-
console.log(e[3].closest(".box"))
console.log(e[3].closest(".container"))
e[3].closest(".container").style.backgroundColor = "black"
console.log(e[3].closest("html"))

// Contains method :-
console.log(document.querySelector(".container").contains(e[2]));
console.log(document.querySelector(".container").contains(e[0]));
console.log(document.querySelector(".container").contains(document.querySelector("body")));
console.log(document.querySelector("body").contains(document.querySelector(".container")));

