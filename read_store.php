<?php
  header("Access-Control_Allow-Origin: *");
  header("Content-Type: aplication/json; charset=UTF-8");
  $json = file_get_contents('php://input');
  $data = json_decode($json, true);
  $ime = $data['ime'];
  $prvi = $data['prvi'];
  $drugi = $data['drugi'];
  $tretji = $data['tretji'];
  $proti = $data['proti'];
  $date = new DateTime();
  $date = $date->format("y:m:d h:i:s");

  $txt = $date.";".$ime.";".$prvi.";".$drugi.";".$tretji.";".$proti;
  $file = file_put_contents('rezultati.csv', $txt.PHP_EOL, FILE_APPEND);
  fclose($file);

?>
