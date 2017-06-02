<?php

header('Content-Type:applcation/json');
$name = $_POST['name'];
$message = 'Сообщение от пользователя: ' + $name;
$result = mail('zhuykova7@gmail.com','Message from',$message);

echo json_encode(array(
	'status' => $result
));

