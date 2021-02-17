// 实时显示时间
// function setClock() {
//     let fullTime = new Date();
//     let timeElement = document.getElementById('time');
//     if (timeElement) timeElement.innerText = fullTime.getHours() + ':' + fullTime.getMinutes() + ':' + fullTime.getSeconds();
//     // if (timeElement) timeElement.innerText = fullTime.getHours() + ':' + fullTime.getMinutes() + ':' + fullTime.getSeconds();
// }

// setInterval("setClock()", 1000);
function show(){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    month=month<10?"0"+month:month;
    var day = date.getDate();
    day=day<10?"0"+day:day;
    var week = date.getDay();
    week="日一二三四五六".charAt(week);
    week="星期"+week;
    var hour = date.getHours();
    hour= hour<10?"0"+ hour: hour;
    var minute = date.getMinutes();
    minute=minute<10?"0"+minute:minute;
    var second = date.getSeconds();
    second=second<10?"0"+second:second;
    var result = year+"."+month+"."+day+" "+week+" "+hour+":"+minute+":"+second ;
    document.getElementById("time").innerHTML = result;
  }
  show();
  setInterval("show()",1000);