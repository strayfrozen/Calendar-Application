const inputEl = document.getElementById('myTask')
const form = document.querySelector('form')
let taskUlEl = document.getElementById('taskList')
let clearBtnEl = document.getElementById('clearTasks')
let myTasks = []
let tasks = localStorage.getItem('myTasks')
						? JSON.parse(localStorage.getItem('myTasks'))
						: localStorage.setItem('myTasks', JSON.stringify(myTasks))
// if (tasks) {
// 	tasks = JSON.parse(localStorage.getItem('myTasks'))
// } else {
// 	localStorage.setItem('myTasks', JSON.stringify(myTasks))
// }
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