function submitForm(event) {
  event.preventDefault();
  event.stopPropagation();
  console.log("submit");

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var phone = document.getElementById("phone").value;

  // Resetowanie klas error-input dla wszystkich pól
  document.getElementById("name").classList.remove("error-input");
  document.getElementById("email").classList.remove("error-input");
  document.getElementById("message").classList.remove("error-input");
  document.getElementById("phone").classList.remove("error-input");

  var errors = []; // Tablica przechowująca nieuzupełnione pola

  // Sprawdzanie, czy pole name jest puste
  if (name === "") {
    errors.push("Pole Imię jest wymagane");
    document.getElementById("name").classList.add("error-input");
  }

  // Sprawdzanie, czy pole email jest puste lub nieprawidłowe
  if (email === "" || !validateEmail(email)) {
    errors.push("Podaj prawidłowy adres email");
    document.getElementById("email").classList.add("error-input");
  }

  // Sprawdzanie, czy pole message jest puste
  if (message === "") {
    errors.push("Pole Wiadomość jest wymagane");
    document.getElementById("message").classList.add("error-input");
  }

  // Sprawdzanie, czy pole phone jest puste
  if (phone === "") {
    errors.push("Pole Telefon jest wymagane");
    document.getElementById("phone").classList.add("error-input");
  }

  if (errors.length > 0) {
    // Tworzenie wiadomości z informacją o nieuzupełnionych polach
    var errorMessages = "<ul>";
    errors.forEach(function (error) {
      errorMessages += "<li>" + error + "</li>";
    });
    errorMessages += "</ul>";

    document.getElementById("form-result").innerHTML =
      '<div class="alert alert-danger mt-2">' +
      errorMessages +
      "</div>";

    return; // Zatrzymywanie dalszego wykonywania funkcji
  }

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

// Funkcja sprawdzająca poprawność adresu email
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
