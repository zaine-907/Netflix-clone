let faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
   faq.addEventListener("click", () => {
       let answer = faq.nextElementSibling;
       if (answer.style.display === "block") {
           answer.style.display = "none";
       } else {
           answer.style.display = "block";
       }
   });
});
const getstartedbutton = document.getElementById('getstartedbtn');
const passaword = document.getElementById('emailpassaword');

const text = document.getElementById('emailinput');

getstartedbutton.addEventListener('click', () => {
 text.disabled=false;
 text.focus();
});


let pages = document.querySelector('.page');
if (pages) {
    pages.addEventListener('click', () => {
        pages.innerText = "The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).";
    });
}

let emailField = document.getElementById("emailinput");
let emailErr = document.getElementById("email-error");
let passwordField = document.getElementById("emailpassword");
let passwordErr = document.getElementById("password-error");

function validateEmail() {
    const emailValue = emailField.value;
    if (!emailValue.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailErr.innerHTML = "Please enter a valid email or phone number";
        emailField.style.borderBottomColor = "red";
        return false;
    }
    emailErr.innerHTML = "";
    emailField.style.borderBottomColor = "green";
}

function validatePassword() {
    const passwordValue = passwordField.value;
    if (passwordValue.length < 8) {
        passwordErr.innerHTML = "Password must be at least 8 characters long";
        passwordField.style.borderBottomColor = "red";
        return false;
    }
    passwordErr.innerHTML = "";
    passwordField.style.borderBottomColor = "green";
}

let getstartedbutton1=document.getElementById(getstartedbtn1);
getstartedbtn1.addEventListener("click",()=>{
    getstartedbtn1.innerHTML="Use Passaword";
    getstartedbtn1.style.borderBottomColor = "grey";
})





