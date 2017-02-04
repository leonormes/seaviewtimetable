let expect = require('chai').expect;
let Timetable = require('../src/generateTimetable');

describe('timetable tests', function() {
	it('should pass this canary test', function() {
		expect(true).to.eql(true);
	});
	let timetable;
	beforeEach(function() {
		timetable = new Timetable();
	});
	it('should pass if an array is returned', function() {
		let pupilRecords = timetable.getPupilRecords();
		expect(Array.isArray(pupilRecords)).to.be.true;
	});
	it('should pass if the pupilRecords array contains an object', function() {
		let pupilRecords = timetable.getPupilRecords();
		expect(pupilRecords[0]).to.have.property('childfname');
	});
});
