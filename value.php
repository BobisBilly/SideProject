<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Access-Control-Allow-Methods: GET, POST, PUT');

$data = '[
{"data1": "value1"},
{"data2": "value2"}
]';

if (isset($_POST['data'])) {
  echo $data;
} else {
  echo '[{"error": Post request failed}]';
}
?>
