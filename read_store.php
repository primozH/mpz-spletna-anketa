<?php
  header('Content-type: application/json');
  $json = $_POST['ime'];

$myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
$txt = $json;
fwrite($myfile, $txt);
$txt = "Jane Doe\n";
fwrite($myfile, $txt);
fclose($myfile);

  $json_decode = json_decode($json, true);
  $json_encode = json_encode($json_decode);
  echo $json_encode;
?>
