<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

$email = $_REQUEST["email"] ?? '';
$subject = "Newsletter Subscription";
$message = "A new user subscribed to your newsletter.\n\nEmail: $email";

$mail = new PHPMailer(true);

try {
    // SMTP settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;

    // Gmail account + App Password
    $mail->Username = 'notification.ticonglobal@gmail.com';
    $mail->Password = 'bqau kdxm sklt tvea'; // <-- paste new App Password here

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Who sends & who receives
    $mail->setFrom('notification.ticonglobal@gmail.com', 'Newsletter');
    $mail->addAddress('vivek.ayyappansanthi@gmail.com');
    $mail->addAddress('anuasok.vfx@gmail.com');

    // Message content
    $mail->isHTML(false);
    $mail->Subject = $subject;
    $mail->Body = $message;

    // Send email
    if($mail->send()){
		echo "success";
	} else {
		echo "error";
	}
} 
catch (Exception $e) {
    echo "Subscription could not be sent. Error: {$mail->ErrorInfo}";
}
?>
