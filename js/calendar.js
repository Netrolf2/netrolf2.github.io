var today = new Date();
var  tomorrow = new Date(today);
tomorrow.setDate(today.getDate()+1);

today = today.toISOString().split('T')[0];
tomorrow = tomorrow.toISOString().split('T')[0];

// console.log(today);

document.getElementById("start").setAttribute("min", today);
document.getElementById("start").setAttribute("value", today);

document.getElementById("end").setAttribute("min", tomorrow);
document.getElementById("end").setAttribute("value", tomorrow);

// console.log(tomorrow);