const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const timeFormat = document.querySelector(".time-format");

const presentTime = () => {
   let date = new Date();
   let hr = date.getHours();
   let min = date.getMinutes();
   let sec = date.getSeconds();
   let format = "AM";

   if (hr === 0) {
      hr = 12;
   }
   //    hr = hr === 0 ? (hr = 12) : hr;
   if (hr > 12) {
      hr -= 12;
      format = "PM";
   }

   // delemeter less than 10 then add 0
   hr = hr < 10 ? "0" + hr : hr;
   min = min < 10 ? "0" + min : min;
   sec = sec < 10 ? "0" + sec : sec;

   // data pass in the html
   hour.innerText = hr;
   minute.innerText = min;
   second.innerText = sec;
   timeFormat.innerText = format;

   setInterval(presentTime, 1000);
};

presentTime();
