const currentDayOfWeek = document.querySelector("#today");
const utcTime = document.querySelector("#utc-time");

const date = new Date();
const weekDay = date.toLocaleDateString("en-US", { weekday: "long" });
const utc = date.getTime();

currentDayOfWeek.textContent = weekDay;
utcTime.textContent = utc;
