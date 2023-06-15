function submitForm(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log("submit");

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var phone = document.getElementById("phone").value;

    $.ajax({
      type: "POST",
      url: "/php/contact-form.php",
      data: {
        name: name,
        email: email,
        message: message,
        phone: phone,
      },
      success: function (data) {
        const response = JSON.parse(data);
        document.getElementById("form-result").innerHTML = response.message;
        if (response.status === "success") {
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          document.getElementById("phone").value = "";
        }
      },
      error: function (data) {
        document.getElementById("form-result").innerHTML = data;
      },
    });
  }

