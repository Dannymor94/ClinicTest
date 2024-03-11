<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

function send_mail(array $mail_setting, array $to, string $subject, string $body)
{
  $mail = new PHPMailer(true);
  try{
   $mail->SMTPDebug = 0;                      
    $mail->isSMTP();                                            
    $mail->Host       = $mail_setting['host'];                     
    $mail->SMTPAuth   = $mail_setting['auth'];                                   
    $mail->Username   = $mail_setting['username'];                    
    $mail->Password   = $mail_setting['password'];                          
    $mail->SMTPSecure = $mail_setting['secure'];       
    $mail->Port       = $mail_setting['port'];
    $mail->CharSet    = $mail_setting['charset'];    
    
    $mail ->setFrom($mail_setting['from_email'], $mail_setting['from_name']);
    foreach ($to as $email){
      $mail->addAddress($email);
    }

    $mail->isHTML($mail_setting['is_html']);
    $mail->Subject=$subject;
    $mail->Body = $body;
    return $mail->send();
  } catch (Exception $e){
    return false;
  }
};

