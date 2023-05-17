<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // process your $_POST here
  $name = $_POST['name'];                 // Sender's name
  $email = $_POST['email'];     // Sender's email address
  $phone  = $_POST['phone'];     // Sender's email address
  $message = $_POST['message'];    // Sender's message
  $from = 'Inprax - formularz kontaktowy ';
  $to = 'maciej.czerwonka@inprax.pl';     // Recipient's email address
  $subject = 'PRACOWNIA PRZYMIERZE';

  $body ="From: $name \n E-Mail: $email \n Phone : $phone \n Message : $message"  ;

	// init error message
	$errmsg = '';
  // Check if name has been entered
  if (!$_POST['name']) {
   $errmsg = 'Pole wymagane';
  }

  // Check if email has been entered and is valid
  if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
   $errmsg = 'Nieprawidłowy format adresu e-mail';
  }

  //Check if message has been entered
  if (!$_POST['message']) {
   $errmsg = 'Pole wymagane';
  }

	$result = '';
  $status = 'success';
  // If there are no errors, send the email
  if (!$errmsg) {
		if (mail ($to, $subject, $body, $from)) {
			$result='<div class="alert alert-success mt-2">Wiadomość wysłana</div>';
      $status = 'success';
		}
		else {
		  $result='<div class="alert alert-danger mt-2">Sorry there was an error sending your message. Please try again later.</div>';
      $status = 'error';
		}
	}
	else{
		$result='<div class="alert alert-danger mt-2">'.$errmsg.'</div>';
    $status = 'error';
	}

  echo json_encode(["message" => $result, "status" => $status]);
}
