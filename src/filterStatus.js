export default function filterStatus(pupilRecordsArray, filterBy) {
	let filteredList = pupilRecordsArray.filter(function(p) {
		return p.status === filterBy;
	});
	return filteredList;
}
