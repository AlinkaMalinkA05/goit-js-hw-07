const sbmtForm = document.querySelector("form")
sbmtForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    const formEmail = this.elements.email.value;
    const formPassword = this.elements.password.value;
    if (formEmail === "" || formPassword === "") {
        alert ("All form fields must be filled in")
        
    } else {
        const newForm = {
            email: formEmail,
            password: formPassword
        };
        
    this.reset() 
    } 
}