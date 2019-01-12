const secondHand = document.querySelector(".second-hand");
minuteHand = document.querySelector(".min-hand");
hourHand = document.querySelector(".hour-hand");

function setDate() {
  const date = new Date();
  seconds = date.getSeconds();
  minutes = date.getMinutes();
  hours = date.getHours();
  secondsDegrees = (seconds / 60) * 360 + 90;
  minutesDegrees = (minutes / 60) * 360 + 90;
  hoursDegrees = (hours / 60) * 360 + 90;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  console.log(seconds);
  console.log(minutes);
  console.log(hours);
}

setInterval(setDate, 1000);
