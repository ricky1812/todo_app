var note=document.getElementById('notifications');
var db;
var newItem = [{ task: "", hours: 0, minutes: 0, day: 0, month: "", year: 0}];
var tasklist=document.getElementById('task-list');
var task=document.getElementById('task');
var hours=document.getElementById('deadline-hour');
var minutes=document.getElementById('deadline-minute');
var seconds=document.getElementById('deadline-second');
var day = document.getElementById('deadline-day');
var month = document.getElementById('deadline-month');
var year = document.getElementById('deadline-year');


function checkdeadlines()
{
	var now=new Date();
	var minuteCheck = now.getMinutes();
    var hourCheck = now.getHours();
    var dayCheck = now.getDate();
    var monthCheck = now.getMonth();
    var yearCheck = now.getFullYear();
}


function notification()
{
	var text = 'HEY! Your task "' + task + '" needs to be done".';
	alert(text);
}

setInterval(checkdeadlines, 1000);