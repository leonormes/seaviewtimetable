import addStartDate from './addStartDate';
import addAgeDiv from './addAgeDiv';
import {state} from './stateObject';
export default function tableRowContent(todayNames) {
	let temp = state.tableParts.dayBox;
	let nameDiv = temp.querySelectorAll('.nameAge');
	let starter = temp.querySelectorAll('.starter');
	for(let i = 0; i < 8; i++) {
		todayNames[i] !== undefined
		? (nameDiv[i].textContent = todayNames[i].fname,
			nameDiv[i].id = todayNames[i].key,
			nameDiv[i].appendChild(addAgeDiv(todayNames[i].dob,
			state.tableParts.age)),
				todayNames[i].status === 'Waiting'
				? starter[i].appendChild(addStartDate(todayNames[i].start))
				: starter[i].textContent = null)
			:(nameDiv[i].textContent = null,
				nameDiv[i].removeAttribute('id'));
				}
				return temp;
			}
