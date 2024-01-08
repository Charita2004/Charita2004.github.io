function sendMail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Please fill in all the fields.");
      return;
    }
  
    // Kiểm tra định dạng email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    var params = {
      name: name,
      email: email,
      message: message
    };
  
    const serviceID = "service_7my96qd";
    const templateID = "template_i5jwkfr";
  
    emailjs.send(serviceID, templateID, params)
      .then(function(response) {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(response);
        alert("Your message sent successfully!");
      })
      .catch(function(error) {
        console.log(error);
        alert("An error occurred while sending the message. Please try again later.");
      });
  }