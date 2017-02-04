import {fetchPupilRecords, pupilRecordsToArray, filterActive}
 from './fetchPupilRecords.js';
import {getTemplate} from './generateTimetable';
import {state} from './stateObject';

fetchPupilRecords().then(function(pupils) {
	state.pupilRecordsArray = pupilRecordsToArray(pupils);
	let active = filterActive(state.pupilRecordsArray);

	getTemplate();
});
