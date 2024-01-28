import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const form = document.querySelector('form');
const fieldset = document.querySelector('fieldset');
const input = form.elements.delay;
input.classList.add('form-input');
let delay;
let isSuccess;
fieldset.addEventListener('click', e => {
  if (e.target.value === 'fulfilled') {
    isSuccess = true;
  } else {
    isSuccess = false;
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();
  delay = input.value;
  // Create promise
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        resolve('Success! Value passed to resolve function');
      } else {
        reject('Error! Error passed to reject function');
      }
    }, delay);
  });

  // Registering promise callbacks
  promise.then(
    value => {
      console.log(`✅ Fulfilled promise in ${delay}ms`);
      iziToast.show({
        class: '',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    },
    error => {
      console.log(`❌ Rejected promise in ${delay}ms`);
      iziToast.error();
    }
  );
  form.reset();
});
