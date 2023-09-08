const currentDayOfWeek = document.querySelector("#today");
const utcTimeDisplay = document.querySelector("#utc-time");

const date = new Date();
const weekDay = date.toLocaleDateString("en-US", { weekday: "long" });

const showTime = () => {
	const date = new Date();
	let utcHours = date.getUTCHours();
	let utcMinutes = date.getUTCMinutes();
	let utcSeconds = date.getUTCSeconds();
	let utcTime;

	utcHours = utcHours < 10 ? `0${utcHours}` : utcHours;
	utcMinutes = utcMinutes < 10 ? `0${utcMinutes}` : utcMinutes;
	utcSeconds = utcSeconds < 10 ? `0${utcSeconds}` : utcSeconds;

	utcTime = `${utcHours}:${utcMinutes}:${utcSeconds}`;

	utcTimeDisplay.textContent = utcTime;
	setTimeout(showTime, 1000);
};
showTime();

currentDayOfWeek.textContent = weekDay;
