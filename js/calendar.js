var today = new Date();
var  tomorrow = new Date(today);
tomorrow.setDate(today.getDate()+1);

today = today.toISOString().split('T')[0];
tomorrow = tomorrow.toISOString().split('T')[0];

// console.log(today);

function setMinMaxDate(startId, endId){
	
	
	document.getElementById(startId).setAttribute('min', today);
	document.getElementById(startId).setAttribute('value', today);

	document.getElementById(endId).setAttribute('min', tomorrow);
	document.getElementById(endId).setAttribute('value', tomorrow);
	
	
}

setMinMaxDate('start', 'end');

if(document.getElementById('pageRF') != null){setMinMaxDate('pageStart', 'pageEnd');}
	
