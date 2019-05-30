var note=document.getElementById('notifications');
var db;
var newItem = [{ task: "", hours: 0, minutes: 0, day: 0, month: "", year: 0}];
var tasklist=document.getElementById('task-list');
var task=document.getElementById('task');
for(i=0;i<task_date.length;i++){
    var taskdate=new Date(task_date[i]);
    console.log(taskdate);
    var minute= taskdate.getMinutes();
    var hour = taskdate.getHours();
    var day = taskdate.getDate();
    var month = taskdate.getMonth();
    var year = taskdate.getFullYear();

}



	




function checkdeadlines()
{
	var now=new Date();
    console.log(now);
	var minuteCheck = now.getMinutes();
    var hourCheck = now.getHours();
    var dayCheck = now.getDate();
    var monthCheck = now.getMonth();
    var yearCheck = now.getFullYear();
    var secondCheck=now.getSeconds();
    for(i=0;i<task_date.length;i++)
    {
        var taskdate=new Date(task_date[i]);
        console.log(taskdate);
        var minute= taskdate.getMinutes();
        var hour = taskdate.getHours();
        var day = taskdate.getDate();
        var month = taskdate.getMonth();
        var year = taskdate.getFullYear();
        var second= taskdate.getSeconds();
    
        if(minute==minuteCheck && day==dayCheck && hour==hourCheck && month==monthCheck && year==yearCheck && second==secondCheck )
        {
            var text = 'HEY! Your task "' + task_name[i] + '" needs to be done".';
            alert(text);
        }
    }
}


function notification()
{
	var text = 'HEY! Your task "' + task + '" needs to be done".';
	alert(text);
}

setInterval(checkdeadlines, 1000);