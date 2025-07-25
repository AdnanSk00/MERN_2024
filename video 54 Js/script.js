alert("Hello JavaScript");

// NOTE :- You can edit any website by using below command
// console.log(document.designMode = "on");

// NOTE :- for making shortcuts in Js language go into settings, click on User Snippets and search "javascript.json(JavaScript)"


// var a = prompt("Enter your number");
// var isTrue = confirm("Are you sure you want to leave this page and blast your computer?")

// if(isTrue){
//     console.log("Computer is blasting");
// }
// else{
//     console.log("Computer is not blasting");
// }

// console.log("Your number is " + a);

document.title = "Hey I am good";
console.log(document.title);

document.body.style.backgroundColor = "darkgreen";
document.querySelector(".box").style.color = "white";

// let button = document.getElementsByClassName("btn");

document.body.children[1].addEventListener("click", ()=>{
    console.log("button click hua");
    document.body.style.backgroundColor = "gold";
    document.body.style.color = "blue"
    document.querySelector(".box").style.color = "darkgreen"
})
console.log("Body Children", document.body.children);