document.addEventListener("DOMContentLoaded", () => {

    const cardd = document.querySelectorAll('.card');
    const submitbtn = document.getElementById("submit");
    const dismissbtn = document.getElementById("dismis");

    console.log(cardd);

    const emailInput = document.getElementById("email_address");
    console.log(emailInput);
    const submitEmail = document.getElementById("submitted_email");
    const errorMsg = document.getElementById("error_message");

    submitbtn.addEventListener('click', ValidateEmail);

    dismissbtn.addEventListener('click', () => {
        cardd[0].classList.remove("hidden");
        cardd[1].classList.add("hidden");
        errorMsg.style.maxHeight = 0;
        emailInput.classList.remove("error");
    });


    function ValidateEmail(e) {

        e.preventDefault();

        const validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (emailInput.value.match(validRegex)) {

            submitEmail.innerText = emailInput.value;
            cardd[0].classList.add("hidden");
            cardd[1].classList.remove("hidden");
            emailInput.value = "";

        } else {
            errorMsg.style.maxHeight = "fit-content";
            emailInput.classList.add("error");
        }

    }

})