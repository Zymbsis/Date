import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as i,i as a}from"./assets/vendor-77e16229.js";const c="/Date/assets/bi_x-octagon-1adb109f.svg",r="/Date/assets/bi_x-lg-b4fe742b.svg",e=document.querySelector("[data-start]");function u(){a.show({backgroundColor:"#EF4040",messageColor:"#fff",messageSize:16,message:"Please choose a date in the future ",position:"topRight",iconUrl:c,close:!1,buttons:[[`<button type="button" style="background-color: #EF4040"><img src=${r}></button>`,function(t,n){t.hide({transitionOut:"fadeOut"},n)}]]})}let o,s;const l={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(console.log(t[0]),s=new Date,t[0].getTime()<=s.getTime())u(),e.classList.remove("active-button");else return o=t[0],e.classList.add("active-button"),e.addEventListener("click",m),o}};i("#datetime-picker",l);function m(){console.log(o)}
//# sourceMappingURL=commonHelpers.js.map
