export default function toType(obj) {
	if(obj === undefined) {
		throw new TypeError('Needs to be passed something to test');
	}
	return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
};
