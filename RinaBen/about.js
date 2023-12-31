document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Validate form values
    if (name !== "" && email !== "" && message !== "") {
        // Display success message
        var successMessage = document.getElementById("successMessage");
        successMessage.classList.remove("hidden");

        // Hide success message after 1 second
        setTimeout(function() {
            successMessage.classList.add("hidden");
        }, 1000);

        // Clear form fields
        document.getElementById("contactForm").reset();
    }
});