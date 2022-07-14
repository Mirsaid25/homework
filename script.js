let form = document.forms.register
let inputs = form.querySelectorAll(".w1")
let errorss = document.querySelector(".error")
let success = document.querySelector(".success")
let need = document.querySelector(".need")

// need.innerHTML = inputs.length


let patterns = {
    text: /^[a-z ,.'-]+$/i,
    email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    number: /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|100)$/,
}


function validate(field , regex) {
    
    if(regex.test(field.value)){
        field.classList.add("on")
        field.classList.remove("off")

        field.parentNode.querySelector("span").classList.remove("red")
        field.parentNode.querySelector("label").innerHTML = ``
        form.querySelector("button").classList.remove("bred")

    } else{
        field.classList.add("off")
        field.classList.remove("on")
        
        field.parentNode.querySelector("span").classList.add("red")
        field.parentNode.querySelector("label").innerHTML = `Please enter your ${field.parentNode.querySelector("span").innerHTML}`
        field.parentNode.querySelector("label").classList.add("red")
        
        form.querySelector("button").classList.add("bred")
    }
}

inputs.forEach(inp => {
    inp.onkeyup =()=>{
        validate(inp,patterns[inp.name])
    }
    
});

form.onsubmit = (event) => {
    event.preventDefault()

    inputs.forEach(inp=>{
        let errors = 0
        let succes = 0
        if(inp.classList.contains("on")){
            succes++
            success.innerHTML = succes
        } else if(inp.classList.contains("off")){
            errors++
            errorss.innerHTML = errors
        }
    
    })
}