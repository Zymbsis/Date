// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/izitoast.min.css';

const button = document.querySelector('[data-start]');
let userSelectedDate;
let currentDate;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    currentDate = new Date();
    if (selectedDates[0].getTime() <= currentDate.getTime()) {
      iziToast.error({
        backgroundColor: '#EF4040',
        messageColor: '#fff',
        messageSize: 16,
        message: 'Please choose a date in the future ',
        position: 'topRight',
        iconUrl: './img/bi_x-octagon (1).svg',
        close: false,
        buttons: [
          [
            '<button type="button" style="background-color: #EF4040"><img src="./img/bi_x-lg.svg"></button>',
          ],
        ],
      });

      button.classList.remove('active-button');
    } else {
      userSelectedDate = selectedDates[0];
      console.log('Correct date');
      button.classList.add('active-button');
    }
  },
};

flatpickr('#datetime-picker', options);
