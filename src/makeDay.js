import {state} from './stateObject';
import getFNames from './getFNames';
import tableRowContent from './tableRowContent';
import toType from './toType';

export default function makeDay(todayReg, day) {
	if(toType(todayReg) !== 'array' ) {
		throw new TypeError('arg 1 needs to be an array');
	}
	let todayNames = getFNames(todayReg);
	state.spaces[day] = 8 - todayNames.length;
	let header = state.tableParts.dayHead;
	header.textContent = day;
	let temp = tableRowContent(todayNames);
	let tab = document.importNode(temp, true);
	tab.id = day;
	document.getElementsByClassName('timeTable')[0].appendChild(tab);
}
