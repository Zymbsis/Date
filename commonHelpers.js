import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as s,i}from"./assets/vendor-77e16229.js";const a="/Date/assets/bi_x-octagon-1adb109f.svg",e=document.querySelector("[data-start]");let o;const r={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){console.log(t[0]),o=new Date,t[0].getTime()<=o.getTime()?(i.error({backgroundColor:"#EF4040",messageColor:"#fff",messageSize:16,message:"Please choose a date in the future ",position:"topRight",iconUrl:a,close:!1,timeout:6e4,buttons:[['<button type="button" style="background-color: #EF4040"><img src="../img/bi_x-lg.svg"></button>']]}),e.classList.remove("active-button")):(t[0],console.log("Correct date"),e.classList.add("active-button"))}};s("#datetime-picker",r);
//# sourceMappingURL=commonHelpers.js.map
