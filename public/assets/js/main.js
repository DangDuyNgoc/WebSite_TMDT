const togglePassword = document.querySelectorAll(".eye");
let activeClassName = "is-active";
togglePassword.forEach((item) => {
  item.addEventListener("click", handleTogglePassword);
});
function handleTogglePassword() {
  let inputType = "password";
  const input = this.parentNode?.previousElementSibling;
  if (this.matches(".eye-close")) {
    inputType = "text";
    const eyeOpen = this.previousElementSibling;
    eyeOpen && eyeOpen.classList.add(activeClassName);
  } else {
    inputType = "password";
    this.classList.remove(activeClassName);
  }
  input && input.setAttribute("type", inputType);
   // previousElementSibling
  // traversing dom
}

var showPassword = document.querySelectorAll(".eye-open");
var hidePassword = document.querySelectorAll(".eye-close");

let inputType = "password";
hidePassword.forEach((item) => {
    item.addEventListener('click', ()=> {
        if(showPassword) {
            showPassword.classList.add('is-active');
        }
    });
});

