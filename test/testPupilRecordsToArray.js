import test from 'ava';
import pupilRecordsToArray from '../src/pupilRecordsToArray';

test('throw error if not given an object', (t) => {
	t.throws(() => {
		pupilRecordsToArray();
	});
});

test('convert object to array', (t) => {
	const pupilRecordsArray = pupilRecordsToArray({
		'-KbbFwUvqDkZced1g0bd': {
			'adultfname': 'Emma',
			'adultsurname': 'White',
			'allergies': false,
			'childfname': 'Alfred',
			'childsurname': 'Richards',
			'days': ['tuesday', 'thursday'],
			'dob': '2014-07-27',
			'email': 'crichards@bgcpartners.com',
			'hasStarted': false,
			'phone': '07879653029',
			'startDate': '2017-01-28',
			'status': 'Active',
			'timeStamp': 1485718778234,
		},
	});
	t.deepEqual(pupilRecordsArray, [
		{
			'adultfname': 'Emma',
			'adultsurname': 'White',
			'allergies': false,
			'childfname': 'Alfred',
			'childsurname': 'Richards',
			'days': ['tuesday', 'thursday'],
			'dob': '2014-07-27',
			'email': 'crichards@bgcpartners.com',
			'hasStarted': false,
			'key': '-KbbFwUvqDkZced1g0bd',
			'phone': '07879653029',
			'startDate': '2017-01-28',
			'status': 'Active',
			'timeStamp': 1485718778234,
		},
	]);
});
