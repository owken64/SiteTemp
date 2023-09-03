<?php
    $password = hash('sha512', '1234');
    $pwd = hash('sha512', $_POST['password']);

    if ( $pwd == $password) {
        echo '
        <h1>管理者ページ</h1>
        <div>パーツ一覧</div>
        <div id="parts-list"></div>
        <div>
            パーツ名: <input id="filename">.html.part
        </div>
        <div>
            <p>
                HTMLは、html, head, bodyタグは必要ありません。<br>
                bodyタグの中身を書いてください。
            </p>
            <p>
                他のパーツにリンクするときは、onclick属性に<br>
                changeContainer(パーツ名)を指定してください。
            </p>
            HTML:
           <div>
              <textarea id="text"></textarea>
           </div>
        </div>
        <div>
          <button onclick="postPage()">Webパーツを保存</button>
        </div>
        <div>
            カスタムCSS
        </div>
        <div>
            <textarea id="custom-css-src"></textarea>
        </div>
        <div>
          <button onclick="postCustomCss()">カスタムCSSを保存</button>
        </div>

        <div>
            カスタムJS
        </div>
        <div>
            <textarea id="custom-js-src"></textarea>
        </div>
        <div>
          <button onclick="postCustomJs()">カスタムJSを保存</button>
        </div>

        <div id="result"></div>
    ';
    } else {
        echo 'error.';
    }
?>

