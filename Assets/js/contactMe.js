const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        alert(
            "Thanks for your message, " +
            name +
            "!"
        );

        contactForm.reset();

    }
);