import toType from './toType';

export default function filterStatus(pupilRecordsArray, filterBy) {
	if(toType(pupilRecordsArray) !== 'array') {
		throw new TypeError('Expected array, got '+ toType(pupilRecordsArray));
	}

	let filteredList = pupilRecordsArray.filter(function(p) {
		return p.status === filterBy;
	});
	return filteredList;
}
