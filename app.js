//1 Get the current day at the top of the scheduler

//baby steps study moment.js and figure out how to get the current day
console.log(moment());
//install moment.js and test it

//Dynamically added the date with moment
var currentTime = document.getElementById("currentDay");
currentTime.innerText = moment().format('dddd , MMMM Do YYYY');

//2//Create time blocks that have the current buisness hour
//baby steps create Time blocks
// add a 9 to 5 buisness hour on them with moment 



//Things to do
//1 Get the current day at the top of the scheduler
//baby steps study moment.js and figure out how to get the current day
//install moment.js and test it
//completed

//2//Create time blocks that have the current buisness hour
//baby steps create Time blocks
// add a 9 to 5 buisness hour on them

//3time blocks are color coded based on the time if its passed or not
//baby steps moment.js to find the time
// based on the time change color of the time block

//4 when I click on timeblock then I enter an event
// make a click event with a submit event


//5 when i submit event then the text is saved to local storage
//baby steps use local storage method above varied to what I want to do

//6 when refreshed the time stays in that block

//study code for local storage

const inputEl = document.getElementById('myTask')
const form = document.querySelector('form')
let taskUlEl = document.getElementById('taskList')
let clearBtnEl = document.getElementById('clearTasks')
let myTasks = []
let tasks = localStorage.getItem('myTasks')
						? JSON.parse(localStorage.getItem('myTasks'))
                        : localStorage.setItem('myTasks', JSON.stringify(myTasks))
                        
//Creates Tasks and save them to local storage
function populateTasks() {
	if (tasks.length > 0) {
		tasks.forEach(task => {
			let liEl = document.createElement('li')
			liEl.innerText = task
			taskUlEl.appendChild(liEl)
		})
	}
}
populateTasks()
function handleSubmitEvent(ev) {
	ev.preventDefault()
	let inputValue = inputEl.value
	
	if (!inputValue) {
		console.log('please enter a task first')
		return
	}
	tasks.push(inputValue)
	localStorage.setItem('myTasks', JSON.stringify(tasks))
	let liEl = document.createElement('li')
    liEl.innerText = inputValue
    liEl.className = "liE1Style"
	taskUlEl.appendChild(liEl)	
	inputEl.value = ''
}
form.addEventListener('submit', handleSubmitEvent)
function clearTasks(event) {
	event.preventDefault()
	localStorage.removeItem('myTasks')
	taskUlEl.innerText = ''
}
clearBtnEl.addEventListener('click', clearTasks)