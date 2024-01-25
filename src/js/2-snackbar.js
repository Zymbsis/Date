const remainingDays = document.querySelector('[data-days]');
const remainingHours = document.querySelector('[data-hours]');
const remainingMinutes = document.querySelector('[data-minutes]');
const remainingSeconds = document.querySelector('[data-seconds]');
class Timer {
  constructor() {
    this.days = 0;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
  }
  setTimer(obj) {
    this.days = obj.days;
    this.hours = obj.hours;
    this.minutes = obj.minutes;
    this.seconds = obj.seconds;
  }
  createTimer() {
    remainingDays.textContent = String(this.days).padStart(2, '0');
    remainingHours.textContent = String(this.hours).padStart(2, '0');
    remainingMinutes.textContent = String(this.minutes).padStart(2, '0');
    remainingSeconds.textContent = String(this.seconds).padStart(2, '0');
  }
}
// const someObj = { days: 15, hours: 12, minutes: 6, seconds: 16 };
// const newObj = new Timer();
// console.log(newObj);
// newObj.setTimer(someObj);
// console.log(newObj);
// newObj.createTimer();
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  // remaining--;

  // remainingDays.textContent = String(days).padStart(2, '0');
  // remainingHours.textContent = String(hours).padStart(2, '0');
  // remainingMinutes.textContent = String(minutes).padStart(2, '0');
  // remainingSeconds.textContent = String(seconds).padStart(2, '0');

  return { days, hours, minutes, seconds };
}
let test = 1000;
const newObj1 = new Timer();
const id = setInterval(() => {
  convertMs(test);
  if (test < 1000) {
    clearInterval(id);
  }
  let resultConvertMs = convertMs(test);
  newObj1.setTimer(resultConvertMs);
  newObj1.createTimer();
  test -= 1000;
}, 1000);
