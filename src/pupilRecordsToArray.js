import toType from './toType';

export default function pupilRecordsToArray(pupilRecord) {
	if(toType(pupilRecord) !== 'object') {
		throw new TypeError('Expected object, got ' + toType(pupilRecord));
	}

	let pupilRecordsArray = Object.keys(pupilRecord).map(function(key) {
		pupilRecord[key].key = key;
		return pupilRecord[key];
	});
	return pupilRecordsArray;
}
