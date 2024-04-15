// let clock = document.querySelector('.clock');

// let a =new Date();
// let h = a.getHours();
// let m = a.getMinutes();
// let s = a.getSeconds();
// setInterval(() => {
//     clock.innerHTML=(h+":"+ m + ":" + s)
// }, 1000);

const clock = document.querySelector(".clock");
function displayTime() {
  let a = new Date();
  let h = a.getHours();
  let m = a.getMinutes();
  let s = a.getSeconds();

  let ls = 0;
  if (s < 10) {
    ls = "0" + s.toString();
  } else {
    ls = s;
  }
  clock.innerHTML = h + ":" + m + ":" + ls;
  // console.log(ls);
}

setInterval(displayTime, 10);
