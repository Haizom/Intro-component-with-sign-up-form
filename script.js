
const btn = document.querySelector("button")
const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const email = document.getElementById("email")
const password = document.getElementById("password")



btn.addEventListener("click", (function(event){
    event.preventDefault()

    validate(fname)
    validate(lname)
    validate(email)
    validate(password)
    }))

function validate(input){
    if (input.value == ""){
        input.parentElement.classList.remove("error-input")
        input.parentElement.classList.add("error-state")
    }else{
        input.parentElement.classList.add("error-input")
        input.parentElement.classList.remove("error-state")
    }
}