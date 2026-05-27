const contactForm =
    document.getElementById("contactForm");

const nameInput =
    document.getElementById("name");

const emailInput =
    document.getElementById("email");

const messageInput =
    document.getElementById("message");

const nameError =
    document.getElementById("nameError");

const emailError =
    document.getElementById("emailError");

const messageError =
    document.getElementById("messageError");

const namePattern =
    /^[A-Za-z\s]{2,50}$/;

const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        let valid = true;

        // Reset errors

        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";

        // Name validation

        if (
            !namePattern.test(
                nameInput.value.trim()
            )
        ) {

            nameError.textContent =
                "Enter a valid name.";

            valid = false;
        }

        // Email validation

        if (
            !emailPattern.test(
                emailInput.value.trim()
            )
        ) {

            emailError.textContent =
                "Enter a valid email address.";

            valid = false;
        }

        // Message validation

        if (
            messageInput.value.trim().length < 10
        ) {

            messageError.textContent =
                "Message must be at least 10 characters.";

            valid = false;
        }

        // Submit success

        if (valid) {

            alert(
                "Message sent successfully!"
            );

            contactForm.reset();
        }

    }
);