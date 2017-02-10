import fetchPupilRecords from './fetchPupilRecords.js';
import filterStatus from './filterStatus';
import pupilRecordsToArray from './pupilRecordsToArray';
import getFNames from './getFNames';
let moment = require('moment');
import getTemplate from './getTemplate';
import {state} from './stateObject';
let active;
let waiting;
fetchPupilRecords().then(function(pupils) {
	getTemplate();
	addTodayDate();
	state.pupilRecordsArray = pupilRecordsToArray(pupils);
	active = filterStatus(state.pupilRecordsArray, 'Active');
	waiting = filterStatus(state.pupilRecordsArray, 'Waiting');
	state.days.forEach(function(day) {
		let todayReg = dailyRegister(day, active);
		let todayWait = dailyRegister(day, waiting);
		makeDay(todayReg, day);
		dayWaiting(todayWait, day);
	});
	spacesRowElements();
});
function dailyRegister(day, status) {
	let dayReg = status.filter(function(pup) {
		return ~pup.days.indexOf(day);
	});
	return dayReg;
}
function dayWaiting(todayWaiting, day) {
	let waitingNames = getFNames(todayWaiting);
	let temp = tableRowContent(waitingNames);
	let header = state.tableParts.dayHead;
	header.textContent = null;
	let tab = document.importNode(temp, true);
	document.getElementsByClassName('waiting')[0]
	.appendChild(tab);
}
function addStartDate(startDate) {
	let startDiv = document.createElement('div');
	startDiv.setAttribute('class', 'starting');
	startDiv.textContent = moment(startDate).format('MMMM Do');
	return startDiv;
}
function makeDay(todayReg, day) {
	let todayNames = getFNames(todayReg);
	state.spaces[day] = 8 - todayNames.length;
	let header = state.tableParts.dayHead;
	header.textContent = day;
	let temp = tableRowContent(todayNames);
	let tab = document.importNode(temp, true);
	tab.id = day;
	document.getElementsByClassName('timeTable')[0].appendChild(tab);
}
function tableRowContent(todayNames) {
	let temp = state.tableParts.dayBox;
	let nameDiv = temp.querySelectorAll('.nameAge');
	let starter = temp.querySelectorAll('.starter');
	for(let i = 0; i < 8; i++) {
		if(todayNames[i]) {
			nameDiv[i].textContent = todayNames[i].fname;
			nameDiv[i].id = todayNames[i].key;
			nameDiv[i].appendChild(addAgeDiv(todayNames[i].dob,
				state.tableParts.age));
			if(todayNames[i].status === 'Waiting') {
			starter[i].appendChild(addStartDate(todayNames[i].start));
		} else {
			starter[i].textContent = null;
		}
		} else {
			nameDiv[i].textContent = null;
			nameDiv[i].removeAttribute('id');
		}
	}
	return temp;
}
function spacesRowElements() {
	state.days.forEach(function(day) {
		let numberDiv = document.createElement('div');
		numberDiv.setAttribute('class', 'numSpaces');
		numberDiv.textContent = state.spaces[day];
		let spaces = document.getElementsByClassName('spaces')[0];
		spaces.appendChild(numberDiv);
	});
}

function addAgeDiv(dob, age) {
	age.textContent = getPupilAge(dob);
	let pupilAge = document.importNode(age, true);
	return pupilAge;
}
function getPupilAge(dob) {
	let a = moment();
	let b = moment(dob);
	return a.diff(b, 'months');
};

function addTodayDate() {
	let dateDiv = document.createElement('h2');
	dateDiv.setAttribute('class', 'today');
	dateDiv.textContent = moment().format('dddd MMMM Do YYYY');
	let titleDate = document.getElementById('pageTitle');
	titleDate.appendChild(dateDiv);
}
