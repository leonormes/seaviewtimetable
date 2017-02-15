import test from 'ava';
import getFNames from '../src/getFNames';
import toType from '../src/toType';

test.beforeEach((t) => {
	t.context.dayReg = [
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
	];
});
test('should throw error if not given array', (t) => {
	const error = t.throws(() => {
		getFNames('notArray');
	}, TypeError);
	t.is(error.message, 'Expected array');
});
test('should return an array', (t) => {
	const names = getFNames(t.context.dayReg);
	t.is(toType(names), 'array');
	t.is(names[0].fname, 'Trudy');
});
