# SiteTemp
Web上でページの編集も完結した簡易アプリケーション

## Webアプリケーション(?)の配置
サーバの適切な位置に配置します。
Apacheを使っているなら
/var/www/html/
直下かな

## 使い方
admin.html ページで、ページの作成・編集を行います。
必須のパーツは、"sidebar"と"container"です。
パーツのHTMLを記述します。

パーツを呼び出すときには、
onclick属性で、changeContainer(name)関数を呼び出します。
nameは呼び出したいパーツの名前です。

