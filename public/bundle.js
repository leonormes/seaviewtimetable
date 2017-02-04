(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _fetchPupilRecords = require('./fetchPupilRecords.js');

var _generateTimetable = require('./generateTimetable');

var _stateObject = require('./stateObject');

(0, _fetchPupilRecords.fetchPupilRecords)().then(function (pupils) {
	_stateObject.state.pupilRecordsArray = (0, _fetchPupilRecords.pupilRecordsToArray)(pupils);
	var active = (0, _fetchPupilRecords.filterActive)(_stateObject.state.pupilRecordsArray);

	(0, _generateTimetable.getTemplate)();
});

},{"./fetchPupilRecords.js":2,"./generateTimetable":3,"./stateObject":4}],2:[function(require,module,exports){
'use strict';

function fetchPupilRecords() {
	return new Promise(function (resolve, reject) {
		firebase.database().ref('/pupils/').once('value').then(function (snapshot) {
			var pupilRecords = snapshot.val();
			resolve(pupilRecords);
		});
	});
}
function pupilRecordsToArray(pupilRecord) {
	var pupilRecordsArray = Object.keys(pupilRecord).map(function (key) {
		pupilRecord[key].key = key;
		return pupilRecord[key];
	});
	return pupilRecordsArray;
}
function filterActive(pupilRecordsArray) {
	var active = pupilRecordsArray.filter(function (p) {
		return p.status === 'Active';
	});
	return active;
}
module.exports = { fetchPupilRecords: fetchPupilRecords, pupilRecordsToArray: pupilRecordsToArray, filterActive: filterActive };

},{}],3:[function(require,module,exports){
'use strict';

var _stateObject = require('./stateObject');

function getTemplate() {
	var dayColumn = document.querySelector('#dayColumn');
	console.log(dayColumn);
}
module.exports = { getTemplate: getTemplate };

},{"./stateObject":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var state = exports.state = {
	'days': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
};

},{}]},{},[1,2,3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIiwic3JjL2ZldGNoUHVwaWxSZWNvcmRzLmpzIiwic3JjL2dlbmVyYXRlVGltZXRhYmxlLmpzIiwic3JjL3N0YXRlT2JqZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFFQTs7QUFDQTs7QUFFQSw0Q0FBb0IsSUFBcEIsQ0FBeUIsVUFBUyxNQUFULEVBQWlCO0FBQ3pDLG9CQUFNLGlCQUFOLEdBQTBCLDRDQUFvQixNQUFwQixDQUExQjtBQUNBLEtBQUksU0FBUyxxQ0FBYSxtQkFBTSxpQkFBbkIsQ0FBYjs7QUFFQTtBQUNBLENBTEQ7Ozs7O0FDTEEsU0FBUyxpQkFBVCxHQUE2QjtBQUM1QixRQUFPLElBQUksT0FBSixDQUFZLFVBQVMsT0FBVCxFQUFrQixNQUFsQixFQUEwQjtBQUM1QyxXQUFTLFFBQVQsR0FBb0IsR0FBcEIsQ0FBd0IsVUFBeEIsRUFBb0MsSUFBcEMsQ0FBeUMsT0FBekMsRUFDQyxJQURELENBQ00sVUFBUyxRQUFULEVBQW1CO0FBQ3hCLE9BQUksZUFBZSxTQUFTLEdBQVQsRUFBbkI7QUFDQSxXQUFRLFlBQVI7QUFDQSxHQUpEO0FBS0EsRUFOTSxDQUFQO0FBT0E7QUFDRCxTQUFTLG1CQUFULENBQTZCLFdBQTdCLEVBQTBDO0FBQ3pDLEtBQUksb0JBQW9CLE9BQU8sSUFBUCxDQUFZLFdBQVosRUFBeUIsR0FBekIsQ0FBNkIsVUFBUyxHQUFULEVBQWM7QUFDbEUsY0FBWSxHQUFaLEVBQWlCLEdBQWpCLEdBQXVCLEdBQXZCO0FBQ0EsU0FBTyxZQUFZLEdBQVosQ0FBUDtBQUNBLEVBSHVCLENBQXhCO0FBSUEsUUFBTyxpQkFBUDtBQUNBO0FBQ0QsU0FBUyxZQUFULENBQXNCLGlCQUF0QixFQUF5QztBQUN4QyxLQUFJLFNBQVMsa0JBQWtCLE1BQWxCLENBQXlCLFVBQVMsQ0FBVCxFQUFZO0FBQ2pELFNBQU8sRUFBRSxNQUFGLEtBQWEsUUFBcEI7QUFDQSxFQUZZLENBQWI7QUFHQSxRQUFPLE1BQVA7QUFDQTtBQUNELE9BQU8sT0FBUCxHQUFpQixFQUFDLG9DQUFELEVBQW9CLHdDQUFwQixFQUF5QywwQkFBekMsRUFBakI7OztBQ3RCQTs7QUFDQTs7QUFDQSxTQUFTLFdBQVQsR0FBdUI7QUFDdEIsS0FBSSxZQUFZLFNBQVMsYUFBVCxDQUF1QixZQUF2QixDQUFoQjtBQUNBLFNBQVEsR0FBUixDQUFZLFNBQVo7QUFDQTtBQUNELE9BQU8sT0FBUCxHQUFpQixFQUFDLHdCQUFELEVBQWpCOzs7QUNOQTs7Ozs7QUFDTyxJQUFNLHdCQUFRO0FBQ3BCLFNBQVEsQ0FBQyxRQUFELEVBQVcsU0FBWCxFQUFzQixXQUF0QixFQUFtQyxVQUFuQyxFQUErQyxRQUEvQztBQURZLENBQWQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHtmZXRjaFB1cGlsUmVjb3JkcywgcHVwaWxSZWNvcmRzVG9BcnJheSwgZmlsdGVyQWN0aXZlfVxuIGZyb20gJy4vZmV0Y2hQdXBpbFJlY29yZHMuanMnO1xuaW1wb3J0IHtnZXRUZW1wbGF0ZX0gZnJvbSAnLi9nZW5lcmF0ZVRpbWV0YWJsZSc7XG5pbXBvcnQge3N0YXRlfSBmcm9tICcuL3N0YXRlT2JqZWN0JztcblxuZmV0Y2hQdXBpbFJlY29yZHMoKS50aGVuKGZ1bmN0aW9uKHB1cGlscykge1xuXHRzdGF0ZS5wdXBpbFJlY29yZHNBcnJheSA9IHB1cGlsUmVjb3Jkc1RvQXJyYXkocHVwaWxzKTtcblx0bGV0IGFjdGl2ZSA9IGZpbHRlckFjdGl2ZShzdGF0ZS5wdXBpbFJlY29yZHNBcnJheSk7XG5cblx0Z2V0VGVtcGxhdGUoKTtcbn0pO1xuIiwiZnVuY3Rpb24gZmV0Y2hQdXBpbFJlY29yZHMoKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHRmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignL3B1cGlscy8nKS5vbmNlKCd2YWx1ZScpXG5cdFx0LnRoZW4oZnVuY3Rpb24oc25hcHNob3QpIHtcblx0XHRcdGxldCBwdXBpbFJlY29yZHMgPSBzbmFwc2hvdC52YWwoKTtcblx0XHRcdHJlc29sdmUocHVwaWxSZWNvcmRzKTtcblx0XHR9KTtcblx0fSk7XG59XG5mdW5jdGlvbiBwdXBpbFJlY29yZHNUb0FycmF5KHB1cGlsUmVjb3JkKSB7XG5cdGxldCBwdXBpbFJlY29yZHNBcnJheSA9IE9iamVjdC5rZXlzKHB1cGlsUmVjb3JkKS5tYXAoZnVuY3Rpb24oa2V5KSB7XG5cdFx0cHVwaWxSZWNvcmRba2V5XS5rZXkgPSBrZXk7XG5cdFx0cmV0dXJuIHB1cGlsUmVjb3JkW2tleV07XG5cdH0pO1xuXHRyZXR1cm4gcHVwaWxSZWNvcmRzQXJyYXk7XG59XG5mdW5jdGlvbiBmaWx0ZXJBY3RpdmUocHVwaWxSZWNvcmRzQXJyYXkpIHtcblx0bGV0IGFjdGl2ZSA9IHB1cGlsUmVjb3Jkc0FycmF5LmZpbHRlcihmdW5jdGlvbihwKSB7XG5cdFx0cmV0dXJuIHAuc3RhdHVzID09PSAnQWN0aXZlJztcblx0fSk7XG5cdHJldHVybiBhY3RpdmU7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtmZXRjaFB1cGlsUmVjb3JkcywgcHVwaWxSZWNvcmRzVG9BcnJheSwgZmlsdGVyQWN0aXZlfTtcbiIsIid1c2Ugc3RyaWN0JztcbmltcG9ydCB7c3RhdGV9IGZyb20gJy4vc3RhdGVPYmplY3QnO1xuZnVuY3Rpb24gZ2V0VGVtcGxhdGUoKSB7XG5cdGxldCBkYXlDb2x1bW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF5Q29sdW1uJyk7XG5cdGNvbnNvbGUubG9nKGRheUNvbHVtbik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtnZXRUZW1wbGF0ZX07XG4iLCIndXNlIHN0cmljdCc7XG5leHBvcnQgY29uc3Qgc3RhdGUgPSB7XG5cdCdkYXlzJzogWydNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5J10sXG59O1xuIl19
