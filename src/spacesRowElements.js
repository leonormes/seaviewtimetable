import {state} from './stateObject';
export default function spacesRowElements() {
	state.days.forEach(function(day) {
		let numberDiv = document.createElement('div');
		numberDiv.setAttribute('class', 'numSpaces');
		numberDiv.textContent = state.spaces[day];
		let spaces = document.getElementsByClassName('spaces')[0];
		spaces.appendChild(numberDiv);
	});
}
