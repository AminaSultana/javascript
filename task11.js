/* Deliverable

Now try storing the user details as an object in the local storage. Watch this video 
Whenever the user refreshes the page read from the localstorage ,
 parse the string and show the user details in the frontend
 */
let submit = document.getElementById('my-form')
submit.addEventListener('submit', getDetails)

function getDetails(e){
    e.preventDefault()
  
    let userName = document.getElementById('name').value
    let userEmail = document.getElementById('email').value

    let myObject = {
        name1: userName,
        email: userEmail
    }
    let myObj = JSON.stringify(myObject)
    localStorage.setItem("myObject", myObj)
    console.log(JSON.parse(localStorage.getItem(myObj)))
}
