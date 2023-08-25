<?php
    $file_list = array_diff( scandir('./parts'), array('.', '..') );
    foreach( $file_list as $file ) {
        if ( !is_dir( $file ) ) {
            // ファイルの場合
            $name = explode('.', $file);
            echo '<a href="#" onclick="getParts(\''. $name[0] . '\')">' . $file . '</a><br>' ;
        } elseif ( is_dir( $file ) ) {
            // ディレクトリの場合
        }
    }
?>
