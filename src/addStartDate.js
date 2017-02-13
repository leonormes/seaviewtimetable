const moment = require('moment');
export default function addStartDate(startDate) {
	let startDiv = document.createElement('div');
	startDiv.setAttribute('class', 'starting');
	startDiv.textContent = moment(startDate).format('MMMM Do');
	return startDiv;
}
