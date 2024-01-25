import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import firstIcon from '../img/bi_x-octagon.svg';
import secondIcon from '../img/bi_x-lg.svg';

const button = document.querySelector('[data-start]');
const input = document.querySelector('#datetime-picker');
const remainingDays = document.querySelector('[data-days]');
const remainingHours = document.querySelector('[data-hours]');
const remainingMinutes = document.querySelector('[data-minutes]');
const remainingSeconds = document.querySelector('[data-seconds]');
let userSelectedDate;
let currentDate;
let remainder;
let setIntervalId;
let resultOfConvertMs;

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
const resetTimer = new Timer();
const startTimer = new Timer();

input.addEventListener('focus', () => {
  input.classList.remove('input-normal');
  input.classList.add('input-active');
});

function createPopUp(message) {
  iziToast.show({
    backgroundColor: '#EF4040',
    messageColor: '#fff',
    messageSize: 16,
    message: `${message}`,
    position: 'topRight',
    iconUrl: firstIcon,
    close: false,
    buttons: [
      [
        `<button type="button" style="background-color: #EF4040"><img src=${secondIcon}></button>`,
        function (instance, toast) {
          instance.hide({ transitionOut: 'fadeOut' }, toast);
        },
      ],
    ],
  });
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    input.classList.add('input-normal');
    console.log(selectedDates[0]);
    clearInterval(setIntervalId);
    userSelectedDate = selectedDates[0];
    currentDate = new Date();
    remainder = userSelectedDate - currentDate;
    resetTimer.createTimer();

    if (remainder < 1000) {
      button.classList.remove('active-button');
      createPopUp('Please choose a date in the future');
    } else {
      button.classList.add('active-button');
      button.addEventListener('click', onButtonClick);
    }
  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function onButtonClick() {
  input.classList.remove('input-normal', 'input-active');
  button.classList.remove('active-button');
  const currentDate = new Date();
  remainder = userSelectedDate - currentDate;

  if (remainder >= 1000) {
    setIntervalId = setInterval(() => {
      resultOfConvertMs = convertMs(remainder);
      startTimer.setTimer(resultOfConvertMs);
      startTimer.createTimer();
      remainder -= 1000;
    }, 1000);
  } else {
    createPopUp('Time out');
  }
}
