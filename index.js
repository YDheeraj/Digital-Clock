let a;
let time;
let date;
let day;

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];



setInterval(() => {

   a=new Date;
   day= a.getDay();
   time=a.getHours()+':'+a.getMinutes()+':'+a.getSeconds();
   date=a.toLocaleDateString();  
document.getElementById('time').innerHTML=date +' - ' + time+'<br>'+weekday[day];
document.getElementById('t2').innerHTML=time;

},1000);