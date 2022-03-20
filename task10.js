let submit = document.getElementById('my-form')
submit.addEventListener('submit', getDetails)

function getDetails(e){
    e.preventDefault()
  
    let userName = document.getElementById('name').value
    let userEmail = document.getElementById('email').value

    console.log(localStorage.setItem('name', userName))
    console.log(localStorage.setItem('email', userEmail))    
}