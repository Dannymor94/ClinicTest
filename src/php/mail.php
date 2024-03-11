<?php 
if(!empty($_POST)){
  require_once __DIR__ . '/vendor/autoload.php';
  $settings = require_once __DIR__ . '/php/setting.php';
  require_once __DIR__ . '/php/functions.php';

  $name = $_POST['name'];
  $email = $_POST['email'];

  $body = "Имя и email оставившего заявку: " . $name . " " . $email;
  send_mail($settings['mail_setting_prod'],['zazaebaka112@yandex.ru'],'Заявка с сайта',$body);
};
header("location: http://localhost/testClinic/index.php");
exit();

