const password = document.querySelector("input#password");
const confirmPassword = document.querySelector("input#confirmPassword");
const btnSignUp = document.querySelector("button#signUpBtn");
const divContainerPassword = document.querySelector("div.container#password");
const pError = document.createElement("p");

btnSignUp.addEventListener("click", validatePassword =>{
    if(password.value !== confirmPassword.value){
        password.style.cssText = "outline: 1.5px solid #ff0000;"
        confirmPassword.style.cssText = "outline: 1.5px solid #ff0000;"
        pError.innerText = "*Passwords do not match"
        pError.style.cssText = "font-family: 'Arial Narrow'; font-size: 12px; color: #ff0000;"
        divContainerPassword.appendChild(pError);        
    }else if(password.value === ""){
        password.style.cssText = "outline: 1.5px solid #ff0000;"
        confirmPassword.style.cssText = "outline: 1.5px solid #ff0000;"
        pError.innerText = "*Passwords are necessary"
        pError.style.cssText = "font-family: 'Arial Narrow'; font-size: 12px; color: #ff0000;"
        divContainerPassword.appendChild(pError);        
    }
})