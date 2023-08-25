<?php
      $ary = file("parts/sidebar.html.part");
      foreach( $ary as $i) {
          echo $i;
      }
?>
