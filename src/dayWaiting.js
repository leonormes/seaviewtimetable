import {state} from './stateObject';
import getFNames from './getFNames';
import tableRowContent from './tableRowContent';

export default function dayWaiting(todayWaiting) {
	let waitingNames = getFNames(todayWaiting);
	let temp = tableRowContent(waitingNames);
	let header = state.tableParts.dayHead;
	header.textContent = null;
	let tab = document.importNode(temp, true);
	document.getElementsByClassName('waiting')[0]
	.appendChild(tab);
}
