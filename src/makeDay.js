import tableRowContent from './tableRowContent';
import getFNames from './getFNames';
import {state} from './stateObject';
export default function makeDay(todayReg, day) {
	let todayNames = getFNames(todayReg);
	state.spaces[day] = 8 - todayNames.length;
	let header = state.tableParts.dayHead;
	header.textContent = day;
	let temp = tableRowContent(todayNames);
	let tab = document.importNode(temp, true);
	tab.id = day;
	document.getElementsByClassName('timeTable')[0].appendChild(tab);
}
