'use strict';
import {state} from './stateObject';
function getTemplate() {
	let dayColumn = document.querySelector('#dayColumn');
	let pupilAge = document.querySelector('#pupilAge');
	let tableParts = {};
	tableParts.age = pupilAge.content.querySelector('.age');
	tableParts.dayBox = dayColumn.content.getElementById('dayBox');
	tableParts.dayRow = tableParts.dayBox.querySelectorAll('.dayRow');
	tableParts.dayHead = tableParts.dayBox
	.querySelector('#dayHeading');
	return tableParts;
}
module.exports = {getTemplate};
