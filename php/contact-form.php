<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // process your $_POST here
  $name = $_POST['name'];                 // Sender's name
  $email = $_POST['email'];     // Sender's email address
  $phone  = $_POST['phone'];     // Sender's phone number
  $message = $_POST['message'];    // Sender's message
  $from = 'Inprax - formularz kontaktowy ';
  $to = 'maciej.czerwonka@inprax.pl';     // Recipient's email address
  $subject = 'Formularz kontaktowy INPRAX';

  $body = "From: $name \n E-Mail: $email \n Phone : $phone \n Message : $message";

  // init error message
  $errmsg = [];
  // Check if name has been entered
  if (empty($name)) {
    $errmsg[] = 'Pole Imię jest wymagane';
  }

  // Check if email has been entered and is valid
  if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errmsg[] = 'Podaj prawidłowy adres email';
  }

  // Check if message has been entered
  if (empty($message)) {
    $errmsg[] = 'Pole Wiadomość jest wymagane';
  }

  // Check if phone has been entered
  if (empty($phone)) {
    $errmsg[] = 'Pole Telefon jest wymagane';
  }

  $result = '';
  $status = 'success';
  // If there are no errors, send the email
  if (empty($errmsg)) {
    if (mail($to, $subject, $body, $from)) {
      $result =
        '<div class="alert alert-success mt-2">Wiadomość wysłana</div>';
      $status = 'success';
    } else {
      $result =
        '<div class="alert alert-danger mt-2">Sorry there was an error sending your message. Please try again later.</div>';
      $status = 'error';
    }
  } else {
    $errorMessages = '<ul>';
    foreach ($errmsg as $error) {
      $errorMessages .= '<li>' . $error . '</li>';
    }
    $errorMessages .= '</ul>';

    $result = '<div class="alert alert-danger mt-2">' . $errorMessages . '</div>';
    $status = 'error';
  }

  echo json_encode(["message" => $result, "status" => $status]);
}
