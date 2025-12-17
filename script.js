var tablinks = document.getElementsByClassName("tabs")
    var tabcontents = document.getElementsByClassName("tab-contents")

    function opentab(event, tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active");
    }

    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("active-tab");
}


    var menu = document.getElementById("menu")

    function openmenu() {
        menu.style.right="0"
    }
    function closemenu() {
        menu.style.right="-200px"
    }

    function validateForm(){
        const name = document.getElementById("form-name").value
        const email = document.getElementById("form-email").value
        const text = document.getElementById("form-message").value

        const nameErr = document.getElementById("name-error")
        const emailErr = document.getElementById("email-error")
        const messageErr = document.getElementById("message-error")

        nameErr.textContent = "";
        messageErr.textContent = "";
        emailErr.textContent = "";

        let isValid = true;
            if (name === "" || /\d/.test(name)) {
                nameErr.textContent = "Please enter your name properly.";
                isValid = false;
            }
            if (email === "" || !email.includes("@") || !email.includes(".")) {
                emailErr.textContent = "Please enter a valid email address.";
                isValid = false;

            }

            if (text === "") {
                messageErr.textContent = "Please write your message here.";
                isValid = false;

            }
            if (isValid) {
                alert("Form submitted successfully!");
                return true;
            } else {
                return false; 
            }
    }

    function resetErrors() {
            document.getElementById("name-error").textContent = "";
            document.getElementById("email-error").textContent = "";
            document.getElementById("message-error").textContent = "";
    }
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
    if (!validateForm()) {
        e.preventDefault();
    }
});

form.addEventListener("reset", resetErrors);
