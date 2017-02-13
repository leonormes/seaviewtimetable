import {state} from './stateObject';
import dailyRegister from './dailyRegister';
import dayWaiting from './dayWaiting';
import fetchPupilRecords from './fetchPupilRecords.js';
import filterStatus from './filterStatus';
import getTemplate from './getTemplate';
import pupilRecordsToArray from './pupilRecordsToArray';
import spacesRowElements from './spacesRowElements';
import makeDay from './makeDay';
import addTodayDate from './addTodayDate';

fetchPupilRecords().then(function(pupils) {
	getTemplate();
	addTodayDate();
	state.pupilRecordsArray = pupilRecordsToArray(pupils);
	state.active = filterStatus(state.pupilRecordsArray, 'Active');
	state.waiting = filterStatus(state.pupilRecordsArray, 'Waiting');
	state.days.forEach(function(day) {
		const todayReg = dailyRegister(day, state.active);
		const todayWait = dailyRegister(day, state.waiting);
		makeDay(todayReg, day);
		dayWaiting(todayWait);
	});
	spacesRowElements();
});
