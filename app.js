//1 Get the current day at the top of the scheduler

//baby steps study moment.js and figure out how to get the current day
console.log(moment());
//install moment.js and test it

//Dynamically added the date with moment
var currentDay = document.getElementById("currentDay");
currentDay.innerText = moment().format('dddd , MMMM Do, YYYY');
var currentTime = moment().hours()
console.log('current time',  currentTime)
var timeBlock = $(".time-block")
console.log(timeBlock)
var saveBtn = $(".saveBtn")


//sets color of block based on time

function setColor() {
	timeBlock.each( function() {
		var hour = $(this).attr("id")
		
		if (currentTime > hour) {
			$(this).addClass("past")
		}
		else if (currentTime == hour) {
			$(this).removeClass("past")
			$(this).addClass("present")
		}
		else if (currentTime < hour) {
			$(this).removeClass("past")
			$(this).removeClass("present")
			$(this).addClass("future")
		}
	})
}

//saves to local storage

saveBtn.on("click", function(event) {
	event.preventDefault()
	var timeBlockId = $(this).attr("id")
	var task = $(this).parent("div").siblings(".time-block").val()
	console.log(task)
	localStorage.setItem(timeBlockId, task)
	showTask()
})

//displays the data from local storage into the text area

function showTask() {
	for (var i = 9; i < 18; i++) {
		var currentTask = localStorage.getItem(i)
		console.log(currentTask)
		$("#"+i+"").text(currentTask)
	}
}

showTask()

setColor()

//Notes to self

//1 Get the current day at the top of the scheduler

//2//Create time blocks that have the current buisness hour
//baby steps create Time blocks
//look for a way to create 8 rows in bootstrap

//Updated used the input-group template from bootstrap

//study buttons

// add a 9 to 5 buisness hour on them with moment 

//Pretty much completed


//3time blocks are color coded based on the time if its passed or not
//baby steps moment.js to find the time
// based on the time change color of the time block

//4 when I click on timeblock then I enter an event
// make a click event with a submit event


//5 when i submit event then the text is saved to local storage
//baby steps use local storage method above varied to what I want to do

//6 when refreshed the time stays in that block
