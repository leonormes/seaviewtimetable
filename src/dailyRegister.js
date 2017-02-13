export default function dailyRegister(day, status) {
	const dayReg = status.filter(function(pup) {
		return ~pup.days.indexOf(day);
	});
	return dayReg;
}
