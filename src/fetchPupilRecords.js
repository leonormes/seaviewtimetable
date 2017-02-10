export default function fetchPupilRecords() {
	return new Promise(function(resolve, reject) {
		firebase.database().ref('/pupils/').once('value')
		.then(function(snapshot) {
			let pupilRecords = snapshot.val();
			resolve(pupilRecords);
		});
	});
}
