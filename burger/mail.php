<?php
$name = $_GET['name'];
$message = 'Сообщение от пользователя: $name';
$result = mail('zhuykova7@gmail.com','Message from',$message);

echo $name;