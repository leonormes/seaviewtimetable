'use strict';
import {state} from './stateObject';
export default function getTemplate() {
	let dayColumn = document.getElementById('dayColumn');
	let pupilAge = document.getElementById('pupilAge');
	state.tableParts.age = pupilAge.content.querySelector('.age');
	state.tableParts.dayBox = dayColumn.content.querySelector('.dayBox');
	state.tableParts.dayRow = state.tableParts.dayBox.querySelectorAll('.dayRow');
	state.tableParts.dayHead = state.tableParts.dayBox
	.querySelector('#dayHeading');
}
