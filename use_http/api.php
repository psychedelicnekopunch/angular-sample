<?php
header('Content-type: application/json; charset=UTF-8');

if (rand(1, 100) < 10) {
	http_response_code(500);
}

echo '--- file_get_contents("php://input") ---'."\n";

var_dump(file_get_contents("php://input"));

echo "\n".'--- $_POST, $_GET, $_FILES ---'."\n";

$res = array(
	'POST'  => $_POST,
	'GET'   => $_GET,
	'FILES' => $_FILES,
);
var_dump($res);