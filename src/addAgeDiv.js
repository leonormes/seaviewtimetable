import getPupilAge from './getPupilAge';

export default function addAgeDiv(dob, age) {
	age.textContent = getPupilAge(dob);
	let pupilAge = document.importNode(age, true);
	return pupilAge;
}
