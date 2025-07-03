console.log("Hello World");

console.log(document.body);
console.log("childNodes", document.body.childNodes);
console.log(document.body.childNodes[1]);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);

let cont = document.body.childNodes[1];
console.log(cont.firstChild)
console.log(cont.lastChild)
console.log(cont.childNodes)
console.log(cont.firstElementChild)
console.log(cont.lastElementChild)
console.log(cont.lastElementChild.style.backgroundColor = "red")
console.log(cont.lastElementChild.style.color = "greenyellow")
console.log(cont.lastElementChild.parentElement)

console.log(document.body.firstElementChild)
console.log(document.body.firstElementChild.childNodes)
console.log(document.body.firstElementChild.children)

console.log(document.body.firstElementChild.children[0])
console.log(document.body.firstElementChild.children[2])
console.log(document.body.firstElementChild.children[3].nextElementSibling)
console.log(document.body.firstElementChild.children[3].previousElementSibling)
console.log(document.body.firstElementChild.children[3].previousElementSibling)

console.log(document.body.children)
console.log(document.body.children[1])
console.log(document.body.children[1].rows)
console.log(document.body.children[1].columns)

console.log(typeof document, typeof window);