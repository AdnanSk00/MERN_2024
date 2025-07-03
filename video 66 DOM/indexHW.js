// const prompt = require('prompt-sync')();

do{
    let age = prompt("Enter your age : ")
    if(age>=18){
        alert("You can drive")
    }
    else if(age<0){
        console.error("You entered negative age")
    }
    else{
        alert("You cannot drive")
    }
    var again = confirm("Do you want to see the prompt again ?")
}while(again)

const input = prompt("Enter the number : ")
if(input > 4){
    // location.href = "https://google.com"
}

const colorChange = prompt("Select background color yellow, red, purple - ")
switch(colorChange){
    case "red" :
        document.body.style.backgroundColor = "red"
        break;

    case "yellow" :
        document.body.style.backgroundColor = "yellow"
        document.querySelector(".box").style.color = "red";
        break;

    case "purple" :
        document.body.style.backgroundColor = "purple"
        break;
    default :
        alert("Invalid color")
}

