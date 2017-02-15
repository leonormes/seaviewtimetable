import test from 'ava';

import filterStatus from '../src/filterStatus';

test.beforeEach((t) => {
	t.context.pupilRecordsArray = [
		{
			'adultfname': 'Sully',
			'adultsurname': 'Bent',
			'allergies': false,
			'childfname': 'Trudy',
			'childsurname': 'Bent',
			'days': ['monday', 'thursday'],
			'dob': '2014-07-27',
			'email': 'crichards@bgcpartners.com',
			'hasStarted': false,
			'key': '-KbbFwUvqDkZced1g0bd',
			'phone': '07879653029',
			'startDate': '2017-01-28',
			'status': 'Active',
			'timeStamp': 1485718778234,
		},
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
		{
			'adultfname': 'Bessie',
			'adultsurname': 'Ormes',
			'allergies': false,
			'childfname': 'Leon',
			'childsurname': 'Ormes',
			'days': ['tuesday', 'thursday'],
			'dob': '2014-07-27',
			'email': 'crichards@bgcpartners.com',
			'hasStarted': false,
			'key': '-KbbFwUvqDkZced1g0bd',
			'phone': '07879653029',
			'startDate': '2017-01-28',
			'status': 'Waiting',
			'timeStamp': 1485718778234,
		},
		{
			'adultfname': 'Bessie',
			'adultsurname': 'Ormes',
			'allergies': false,
			'childfname': 'Leon',
			'childsurname': 'Ormes',
			'days': ['tuesday', 'thursday'],
			'dob': '2014-07-27',
			'email': 'crichards@bgcpartners.com',
			'hasStarted': false,
			'key': '-KbbFwUvqDkZced1g0bd',
			'phone': '07879653029',
			'startDate': '2017-01-28',
			'status': 'Waiting',
			'timeStamp': 1485718778234,
		},
		{
			'adultfname': 'Bessie',
			'adultsurname': 'Ormes',
			'allergies': false,
			'childfname': 'Leon',
			'childsurname': 'Ormes',
			'days': ['tuesday', 'thursday'],
			'dob': '2014-07-27',
			'email': 'crichards@bgcpartners.com',
			'hasStarted': false,
			'key': '-KbbFwUvqDkZced1g0bd',
			'phone': '07879653029',
			'startDate': '2017-01-28',
			'status': 'Waiting',
			'timeStamp': 1485718778234,
		},
	];
});
test('throw error if not given an array', (t) => {
	t.throws(() => {
		filterStatus('notAnArray');
	});
});
test('return a filtered list of Waiting pupils', (t) => {
	const filteredList = filterStatus(t.context.pupilRecordsArray, 'Waiting');
	t.deepEqual(filteredList, [{
		'adultfname': 'Bessie',
		'adultsurname': 'Ormes',
		'allergies': false,
		'childfname': 'Leon',
		'childsurname': 'Ormes',
		'days': ['tuesday', 'thursday'],
		'dob': '2014-07-27',
		'email': 'crichards@bgcpartners.com',
		'hasStarted': false,
		'key': '-KbbFwUvqDkZced1g0bd',
		'phone': '07879653029',
		'startDate': '2017-01-28',
		'status': 'Waiting',
		'timeStamp': 1485718778234,
	},
	{
		'adultfname': 'Bessie',
		'adultsurname': 'Ormes',
		'allergies': false,
		'childfname': 'Leon',
		'childsurname': 'Ormes',
		'days': ['tuesday', 'thursday'],
		'dob': '2014-07-27',
		'email': 'crichards@bgcpartners.com',
		'hasStarted': false,
		'key': '-KbbFwUvqDkZced1g0bd',
		'phone': '07879653029',
		'startDate': '2017-01-28',
		'status': 'Waiting',
		'timeStamp': 1485718778234,
	},
	{
		'adultfname': 'Bessie',
		'adultsurname': 'Ormes',
		'allergies': false,
		'childfname': 'Leon',
		'childsurname': 'Ormes',
		'days': ['tuesday', 'thursday'],
		'dob': '2014-07-27',
		'email': 'crichards@bgcpartners.com',
		'hasStarted': false,
		'key': '-KbbFwUvqDkZced1g0bd',
		'phone': '07879653029',
		'startDate': '2017-01-28',
		'status': 'Waiting',
		'timeStamp': 1485718778234,
	}]);
});
test('return a filtered list of Active pupils', (t) => {
	const filteredList = filterStatus(t.context.pupilRecordsArray, 'Active');
	t.deepEqual(filteredList, [{
		'adultfname': 'Sully',
		'adultsurname': 'Bent',
		'allergies': false,
		'childfname': 'Trudy',
		'childsurname': 'Bent',
		'days': ['monday', 'thursday'],
		'dob': '2014-07-27',
		'email': 'crichards@bgcpartners.com',
		'hasStarted': false,
		'key': '-KbbFwUvqDkZced1g0bd',
		'phone': '07879653029',
		'startDate': '2017-01-28',
		'status': 'Active',
		'timeStamp': 1485718778234,
	},
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
	}]);
});
