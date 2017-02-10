export default function getFNames(dayReg) {
	let names = [];
	dayReg.forEach(function(pup) {
		let pupil = {};
		pupil.fname = pup.childfname;
		pupil.key = pup.key;
		pupil.status = pup.status;
		pupil.dob = pup.dob;
		pupil.start = pup.startDate;
		names.push(pupil);
	});
	return names;
}
