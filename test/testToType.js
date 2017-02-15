import test from 'ava';

import toType from '../src/toType';

test('throw error if not given an argument', (t) => {
	t.throws(() => {
		toType();
	});
	});
test('returns string if given a string', (t) => {
	t.is(toType('a'), 'string');
});
test('should return object if passed an {}', (t) => {
	t.is(toType({}), 'object');
});
test('does not return wrong type', (t) => {
	t.not(toType([]), 'string');
});
