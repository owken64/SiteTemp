function postPage() {
    var req = new XMLHttpRequest();

    let fn = document.getElementById("filename");
    let t = document.getElementById("text");
    let r = document.getElementById("result");
    req.onreadystatechange = function() {

        if (req.readyState == 4) { // 通信の完了時
          if (req.status == 200) { // 通信の成功時
            r.innerHTML = "complete!";
          } else {
            r.innerHTML = "error...";
          }
        }else{
            r.innerHTML = "connecting...";
        }
      }
    
    req.open('POST', 'createPage.php', true);
    req.setRequestHeader('content-type',
      'application/x-www-form-urlencoded;charset=UTF-8');
    req.send('filename=' + encodeURIComponent(fn.value)
     + '&' + 'text=' + encodeURIComponent(t.value));
}

function getParts(name) {
    var req = new XMLHttpRequest();

    let fn = document.getElementById("filename");
    let t = document.getElementById("text");
    let r = document.getElementById("result");
    req.onreadystatechange = function() {

        if (req.readyState == 4) { // 通信の完了時
          if (req.status == 200) { // 通信の成功時
            fn.value = name;
            t.value = req.responseText; 
            r.innerHTML = "";
          } else {
            r.innerHTML = "通信エラー";
          }
        }else{
            r.innerHTML = "通信中...";
        }
      }
    req.open('GET', 'getContainer.php?name=' + encodeURIComponent(name), true);
    req.send(null);   
}

function getPartsList(){
    var req = new XMLHttpRequest();

    let pl = document.getElementById("parts-list");
    let r = document.getElementById("result");
    req.onreadystatechange = function() {

        if (req.readyState == 4) { // 通信の完了時
          if (req.status == 200) { // 通信の成功時
            pl.innerHTML = req.responseText; 
          } else {
            r.innerHTML = "通信エラー";
          }
        }else{
            r.innerHTML = "通信中...";
        }
      }
    req.open('GET', 'getPartsList.php', true);
    req.send(null);   
}
