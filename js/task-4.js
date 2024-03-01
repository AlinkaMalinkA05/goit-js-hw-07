const sbmtForm = document.querySelector("form.login-form")
sbmtForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const formEmail = this.elements.email.value.trim();
    const formPassword = this.elements.password.value.trim();
    if (formEmail === "" || formPassword === "") {
        alert ("All form fields must be filled in")
    } else {
        const newForm = {
            email: formEmail,
            password: formPassword
        };
        console.log(newForm);
        
    this.reset() 
    } 
}