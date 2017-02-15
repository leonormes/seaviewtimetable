import toType from './toType';
export default function getFNames(dayReg) {
	console.log(dayReg);
	if(toType(dayReg) !== 'array') {
		throw new TypeError('Expected array');
	}
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
