let itemList = document.querySelector('#items');
/* console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = 'grey'

//1.parent element
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = 'grey';
console.log(itemList.parentElement.parentElement.parentElement)

//2. lastElementChild
itemList.lastElementChild.textContent = 'Hello last child';

//nextsibling
console.log(itemList.nextSibling)

//nextelement sibling
console.log(itemList.nextElementSibling)

//previous sibling
console.log(itemList.previousSibling)

//previous element sibling
console.log(itemList.previousElementSibling)
itemList.previousElementSibling.style.color = 'blue'*/

//create element

//create a div
let newDiv = document.createElement('div')

//add a class
newDiv.className = 'hello'

//add id
newDiv.id = 'hello1'

//add attribute
newDiv.setAttribute('title', 'Hello Div')

//create text node
let newDivText = document.createTextNode('Hello World')

//add text to div
newDiv.appendChild(newDivText)

let container = document.querySelector('header .container')
let h1 = document.querySelector('header h1')
console.log(newDiv)

container.insertBefore(newDiv, h1)

let item = document.querySelector('#firstitem')
item.parentNode.insertBefore(newDiv, item)
