const moment = require('moment');
export default function getPupilAge(dob) {
	let a = moment();
	let b = moment(dob);
	return a.diff(b, 'months');
};
