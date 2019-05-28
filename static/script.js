
document.getElementById("add").addEventListener('click',function(){
	var task=document.getElementById('task');
	var date=document.getElementById('datetime');
	console.log(date);
	console.log(task);
	localStorage.setItem('task',task);
	localStorage.setItem('datetime',date);

	alert(task);
	
})

