/*Everytime you add a new user, the older user gets removed.
Use some algorithm to store the details of multiple users in the local storage. (Check Hint1 for answer to this if stuck for long)
Show the list of all the users who have applied right below the form using DOM Manipulations. Simply Iterate through the localstorage object to get all the keys stored in it.(Check Hint2 for answer to this if stuck for long)
Read from local storage whenever the user refreshes the page and show it in the frontend. Hint-- Use event --> DOMCONTENTLOADED
Show the booking made on the screen with the user details*/

let submit = document.getElementById('my-form')
submit.addEventListener('submit', getDetails)
function getDataFromLS(){
    for(let i=0;i<localStorage.length;i++){
        let userVal = JSON.parse(localStorage.getItem(localStorage.key(i)))
        let showDetails = document.createElement('div')
        let string = '\u2022' + userVal.name1 + "   " + userVal.email
        showDetails.innerHTML = string

        let container = document.querySelector('.container')
        insertAfter(container, showDetails)

        function insertAfter(refNode, newNode){
            refNode.parentNode.insertBefore(newNode, refNode.nextSibling)
        }
    } 
}

window.addEventListener('DOMContentLoaded', (event) => {
    getDataFromLS()
});

function getDetails(e){
    e.preventDefault()
  
    let userName = document.getElementById('name').value
    let userEmail = document.getElementById('email').value

    let myObject = {
        name1: userName,
        email: userEmail
    }

    let myObj = JSON.stringify(myObject)
    localStorage.setItem(myObject.email, myObj)
    getDataFromLS()
}
