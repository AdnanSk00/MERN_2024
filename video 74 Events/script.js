// List of all mouse events :-
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

let button = document.getElementById("btn");

// button.addEventListener("click", ()=>{
//     alert("I was clicked. Yayy!!")
//     document.body.style.backgroundColor = "rgb(23, 6, 78)";
//     // document.getElementsByClassName("container").style.color = "hsl(235, 96%, 79%)";
    // document.querySelector(".container").style.color = "greenyellow";
    // })
    
// button.addEventListener("dblclick", ()=>{
//     // alert("I was clicked. Yayy!!")
//     document.querySelector(".box").innerHTML = "<b>Yayy you were clicked by Adnan</b> <br> Enjoy your click!";
//     document.body.style.backgroundColor = "rgb(23, 6, 78)";
//     document.querySelector(".container").style.color = "greenyellow";
// })

// button.addEventListener("contextmenu", ()=>{
//     alert("Dont hack us by right click please!")
// })

document.addEventListener("keydown", (e)=>{
    console.log(e)
    // console.log(e, e.key, e.keyCode)
})

