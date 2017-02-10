export default function pupilRecordsToArray(pupilRecord) {
	let pupilRecordsArray = Object.keys(pupilRecord).map(function(key) {
		pupilRecord[key].key = key;
		return pupilRecord[key];
	});
	return pupilRecordsArray;
}
