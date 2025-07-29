console.log("Hey this is tutorial 71");

console.log(document.querySelector(".box"));
console.log(document.querySelector(".container"));
console.log(document.querySelector(".box").innerHTML);
console.log(document.querySelector(".box").childNodes);
console.log(document.querySelector(".box").children);
console.log(document.querySelector(".container").innerHTML);
console.log(document.querySelector(".container").childNodes);
console.log(document.querySelector(".container").children);
console.log(document.querySelector(".box").innerText);
console.log(document.querySelector(".container").innerText);
console.log(document.querySelector(".box").outerHTML);
console.log(document.querySelector(".container").outerHTML);
console.log(document.querySelector(".container").tagName);
console.log(document.querySelector(".container").nodeName);
console.log(document.querySelector(".container").textContent);
// // console.log(document.querySelector(".container").hidden);
// console.log(document.querySelector(".container").hidden = true);
// // console.log(document.querySelector(".box").innerHTML = "Hey I am @dnan");
// // console.log(document.querySelector(".container").innerHTML = "I changed inner html");
// console.log(document.querySelector(".box").hasAttribute("style"));
// console.log(document.querySelector(".box").getAttribute("style"));
// console.log(document.querySelector(".box").setAttribute("style", "display: flex"));
// console.log(document.querySelector(".box").getAttribute("style"));
// console.log(document.querySelector(".box").removeAttribute("style"));
// console.log(document.querySelector(".box").attributes);

// NOTE :- You can edit any website by using below
// console.log(document.designMode = "on");
// NOTE :- You can create custom attribute using "data-..." => {key : value} 
// console.log(document.querySelector(".box").dataset)

let div = document.createElement("i");
div.innerHTML = "I have been inserted <b>by Adnan</b>";
div.setAttribute("class", "created");
console.log(div);
// document.querySelector(".container").append(div);
// document.querySelector(".container").prepend(div);
// document.querySelector(".container").before(div);
// document.querySelector(".container").after(div);
// document.querySelector(".container").replaceWith(div);

// insert Adjacent HTML/Text/Element :-

let cont = document.querySelector(".container");
// cont.insertAdjacentHTML("beforebegin", "<b>I am under the water. Please help me here too much raining...iuuuuooooo</b>");
// cont.insertAdjacentHTML("afterbegin", "<b>I am under the water. Please help me here too much raining...iuuuuooooo</b>");
// cont.insertAdjacentHTML("beforeend", "<b>I am under the water. Please help me here too much raining...iuuuuooooo</b>");
// cont.insertAdjacentHTML("afterend", "<b>I am under the water. Please help me here too much raining...iuuuuooooo</b>");

// console.log(document.querySelector(".box").remove());

// let khata = document.createElement("section")
// cont.insertAdjacentElement("beforebegin", khata)
// cont.insertAdjacentText("beforebegin", "DOM is important!")

// ClassName & ClassList :-

// console.log(document.querySelector(".container").classList);
// console.log(document.querySelector(".container").className);
// console.log(document.querySelector(".container").classList.add("harry")); 
// - only one time same class will be added again and agian in above
// console.log(document.querySelector(".container").className);
// console.log(document.querySelector(".container").classList.remove("bg-green"));
// console.log(document.querySelector(".container").className);
// - if the class present, toggle removes it or not present, toggle adds it.
// console.log(document.querySelector(".container").classList.toggle("red"));
// console.log(document.querySelector(".container").className);
// - Contains checks the given class exists or not.
// console.log(document.querySelector(".container").classList.contains("red"));

