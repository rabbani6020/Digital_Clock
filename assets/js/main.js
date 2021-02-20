const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

let presentTime = () => {
   const date = new Date();
   const hr = date.getHours();
   const min = date.getMinutes();
   const sec = date.getSeconds();

   hour.innerText = hr;
   minute.innerText = min;
   second.innerText = sec;
};

setInterval(presentTime, 1000)
