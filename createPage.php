<?php
  $filename = $_POST['filename'];
  $text = $_POST['text'];
  file_put_contents("parts/" . $filename . ".html.part", $text);
?>
