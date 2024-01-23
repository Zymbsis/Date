// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import firstIcon from '../img/bi_x-octagon.svg';
import secondIcon from '../img/bi_x-lg.svg';

const button = document.querySelector('[data-start]');
function createPopUp() {
  iziToast.show({
    backgroundColor: '#EF4040',
    messageColor: '#fff',
    messageSize: 16,
    message: 'Please choose a date in the future ',
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
let userSelectedDate;
let currentDate;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // userSelectedDate = selectedDates[0];
    console.log(selectedDates[0]);
    currentDate = new Date();
    if (selectedDates[0].getTime() <= currentDate.getTime()) {
      createPopUp();
      button.classList.remove('active-button');
    } else {
      userSelectedDate = selectedDates[0];
      button.classList.add('active-button');
      button.addEventListener('click', some);
      return userSelectedDate;
    }
  },
};

flatpickr('#datetime-picker', options);
function some() {
  console.log(userSelectedDate);
}
