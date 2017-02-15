import test from 'ava';

import makeDay from '../src/makeDay';

test('should throw error if not given array', (t) => {
	const error = t.throws(() => {
		makeDay('notArray');
	}, TypeError);
	t.is(error.message, 'arg 1 needs to be an array');
});
