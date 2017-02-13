const moment = require('moment');
export default function addTodayDate() {
	let dateDiv = document.createElement('h2');
	dateDiv.setAttribute('class', 'date');
	dateDiv.textContent = moment().format('dddd MMMM Do YYYY');
	let titleDate = document.getElementById('pageTitle');
	titleDate.appendChild(dateDiv);
}
