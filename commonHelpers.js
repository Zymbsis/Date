import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as i,i as r}from"./assets/vendor-77e16229.js";const e=document.querySelector("[data-start]");let o;const s={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){console.log(t[0]),o=new Date,t[0].getTime()<=o.getTime()?(r.error({backgroundColor:"#EF4040",messageColor:"#fff",messageSize:16,message:"Please choose a date in the future ",position:"topRight",iconUrl:"../img/Oleksii.jpg",close:!1,timeout:6e4,buttons:[['<button type="button" style="background-color: #EF4040"><img src="./img/bi_x-lg.svg"></button>']]}),e.classList.remove("active-button")):(t[0],console.log("Correct date"),e.classList.add("active-button"))}};i("#datetime-picker",s);
//# sourceMappingURL=commonHelpers.js.map
