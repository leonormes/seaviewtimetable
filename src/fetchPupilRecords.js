function fetchPupilRecords() {
	return new Promise(function(resolve, reject) {
		firebase.database().ref('/pupils/').once('value')
		.then(function(snapshot) {
			let pupilRecords = snapshot.val();
			resolve(pupilRecords);
		});
	});
}
function pupilRecordsToArray(pupilRecord) {
	let pupilRecordsArray = Object.keys(pupilRecord).map(function(key) {
		pupilRecord[key].key = key;
		return pupilRecord[key];
	});
	return pupilRecordsArray;
}
function filterStatus(pupilRecordsArray, filterBy) {
	let filteredList = pupilRecordsArray.filter(function(p) {
		return p.status === filterBy;
	});
	return filteredList;
}
module.exports = {fetchPupilRecords, pupilRecordsToArray, filterStatus};
