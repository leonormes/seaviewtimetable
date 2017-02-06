import {fetchPupilRecords, pupilRecordsToArray, filterActive}
 from './fetchPupilRecords.js';
 let moment = require('moment');
import {getTemplate} from './generateTimetable';
import {state} from './stateObject';
let active;
fetchPupilRecords().then(function(pupils) {
	state.pupilRecordsArray = pupilRecordsToArray(pupils);
	active = filterActive(state.pupilRecordsArray);
	state.days.forEach(function(day) {
		let todayReg = dailyRegister(day);
		makeDay(todayReg, day);
	});
});
function dailyRegister(day) {
let dayReg = active.filter(function(pup) {
	return pup.days.indexOf(day) > -1;
	});
	return dayReg;
}
function makeDay(todayReg, day) {
	let table = getTemplate();
	let todayNames = getFNames(todayReg);
	let temp = table.dayBox;
	let header = table.dayHead;
	header.textContent = day;
	let row = temp.querySelectorAll('.dayRow');
	for(let i = 0; i < 8; i++) {
		if(todayNames[i]) {
	row[i].textContent = todayNames[i].fname;
	row[i].id = todayNames[i].key;
	row[i].appendChild(addAgeDiv(todayNames[i].dob));
} else {
	row[i].textContent = null;
	row[i].id = 'space';
}
}
let tab = document.importNode(temp, true);
document.getElementsByClassName('content')[0].appendChild(tab);
}
function addAgeDiv(dob) {
	let table = getTemplate();
	let age = table.age;
	age.textContent = getPupilAge(dob);
	let pupilAge = document.importNode(age, true);
	return pupilAge;
}
function getPupilAge(dob) {
	let a = moment();
	let b = moment(dob);
	return a.diff(b, 'months');
};
function getFNames(dayReg) {
	let names = [];
	names.length = 0;
	dayReg.forEach(function(pup) {
		let pupil = {};
		pupil.fname = pup.childfname;
		pupil.key = pup.key;
		pupil.dob = pup.dob;
		names.push(pupil);
	});
	return names;
}
