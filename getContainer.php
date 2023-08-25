<?php
    $name = $_GET['name'];
    $ary = file("parts/" . $name . ".html.part");
    foreach( $ary as $i) {
        echo $i;
    }
?>
