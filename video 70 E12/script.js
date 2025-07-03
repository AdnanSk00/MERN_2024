
// range : 0 - 0.20 - 0.40 - 0.60 - 0.80 - 0.99  1

let boxes = document.getElementsByClassName("box")
console.log(boxes)

// Lets generate the first box
        let random1 = Math.random();
        console.log(random1);
        if (random1 < 0.20) {
            boxes[0].style.backgroundColor = "red"
            boxes[0].style.color = "white"
        }
        else if (random1 >= 0.20 && random1 < 0.40) {
            boxes[0].style.backgroundColor = "yellow"
            boxes[0].style.color = "brown"
        }
        else if (random1 >= 0.40 && random1 < 0.60) {
            boxes[0].style.backgroundColor = "pink"
            boxes[0].style.color = "greenyellow"
        }
        else if (random1 >= 0.600 && random1 < 0.80) {
            boxes[0].style.backgroundColor = "skyblue"
            boxes[0].style.color = "darkblue"
        }
        else {
            boxes[0].style.backgroundColor = "green"
            boxes[0].style.color = "white"
        }


        