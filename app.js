const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const requirementList = document.querySelectorAll(".requirement-list li");

const requirements = [
    { regex: /.{8,}/, index:0 }, //Minimum of 8 characters
    { regex: /[0-9]/, index:1 }, //At least one number
    { regex: /[a-z]/, index:2 }, //At least one lowercase letter
    { regex: /[^A-Za-z0-9]/, index:3 }, //At least one special character
    { regex: /[A-Z]/, index:4 }, //At least one uppercase letter
]

passwordInput.addEventListener("keyup" , (e) => {
    requirements.forEach(item => {
        const isValid = item.regex.test(e.target.value);
        const requiremenItem = requirementList[item.index]


        //update class and icon requirements
        if (isValid) {
            requiremenItem.firstElementChild.className = "fa-solid fa-check";
            requiremenItem.classList.add("valid");
        } else {
            requiremenItem.firstElementChild.className = "fa-solid fa-circle";
            requiremenItem.classList.remove("valid");
        }
    });
});  

eyeIcon .addEventListener("click" , () => {
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";

    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`; 
})
