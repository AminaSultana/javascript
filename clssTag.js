/* let m = document.getElementsByClassName('list1')
m[0].style.fontWeight = 'bold'
let li1 = document.getElementsByTagName('li')
li1[4].style.backgroundColor = 'red' */

 /* let li = document.getElementsByTagName('li')
console.log(li)
li[2].style.backgroundColor = 'yellow'

for(let i=0;i<li.length;i++){
    li[i].style.fontWeight = 'bold'
    li[i].style.backgroundColor = 'blue'
    li[i].textContent = i
} */

/* 
let m = document.querySelector('.list-group:nth-child(2)');
m.style.backgrounColor = 'green'

let f = document.querySelector('.list-group:nth-child(3)')
f.textContent = ""
  */


let sec = document.querySelectorAll('.list-group');
sec[2].style.color = 'green';

let odd = document.querySelectorAll('.list-group:nth-child(odd)');
for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = 'green'
}
