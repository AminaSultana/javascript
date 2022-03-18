let li = document.getElementsByTagName('li')
console.log(li)
li[2].style.backgroundColor = 'yellow'

for(let i=0;i<li.length;i++){
    li[i].style.fontWeight = 'bold'
    li[i].style.backgroundColor = 'blue'
    li[i].textContent = i
}


