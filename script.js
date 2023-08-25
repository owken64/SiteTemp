function getSidebar(){
    var req = new XMLHttpRequest();

    let s = document.getElementById("sidebar");
    req.onreadystatechange = function() {

        if (req.readyState == 4) { // 通信の完了時
          if (req.status == 200) { // 通信の成功時
            s.innerHTML = req.responseText;   
          } else {
            s.innerHTML = "通信エラー";
          }
        }else{
            s.innerHTML = "通信中...";
        }
      }
    
    req.open('GET', 'getSidebar.php', true);
    req.send(null);


}

function getContainer(){
    var req = new XMLHttpRequest();

    let c = document.getElementById("container");
    req.onreadystatechange = function() {

        if (req.readyState == 4) { // 通信の完了時
          if (req.status == 200) { // 通信の成功時
            c.innerHTML = req.responseText; 
          } else {
            c.innerHTML = "通信エラー";
          }
        }else{
            c.innerHTML = "通信中...";
        }
      }
    req.open('GET', 'getContainer.php?name=container', true);
    req.send(null);


}

function changeContainer(name) {
    var req = new XMLHttpRequest();

    let c = document.getElementById("container");
    req.onreadystatechange = function() {

        if (req.readyState == 4) { // 通信の完了時
          if (req.status == 200) { // 通信の成功時
            c.innerHTML = req.responseText; 
          } else {
            c.innerHTML = "通信エラー";
          }
        }else{
            c.innerHTML = "通信中...";
        }
      }
    req.open('GET', 'getContainer.php?name=' + encodeURIComponent(name), true);
    req.send(null);   
}