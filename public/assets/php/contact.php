<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

$name = $_REQUEST["name"] ?? '';
$email = $_REQUEST["email"] ?? '';
$phone = $_REQUEST["phone"] ?? '';
$subject = $_REQUEST["subject"] ?? 'Website Contact Form';
$message = $_REQUEST["message"] ?? '';

$mail = new PHPMailer(true);

try {
    // SMTP settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;

    // IMPORTANT: change this to your Gmail + App Password
    $mail->Username = 'notification.ticonglobal@gmail.com';
    $mail->Password = 'bqau kdxm sklt tvea'; // <-- paste new App Password here

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Sender & receiver
    $mail->setFrom('notification.ticonglobal@gmail.com', 'Website Contact');
    $mail->addAddress('vivek.ayyappansanthi@gmail.com');
    $mail->addAddress('anuasok.vfx@gmail.com');

    // Content
    $mail->isHTML(false);
    $mail->Subject = $subject;
    $mail->Body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message";

   if($mail->send()){
		echo "success";
	} else {
		echo "error";
	}
} catch (Exception $e) {
    echo "Message could not be sent. Error: {$mail->ErrorInfo}";
}
?>
