let a = "7:00";
let b = "5:00";

const parseTime = (a) => {
  let c = a.split(":");
  return parseInt(c[0] * 60 + parseInt(c[1]));
};
let time = parseTime(a) - parseTime(b);

function convertMinHour(min) {
  let para = min;
  let hours = para / 60;
  let roundHr = Math.floor(hours);
  let minutes = (hours - roundHr) * 60;
  let roundMin = Math.round(minutes);
  return `${roundHr} h ${roundMin} min`;
}

console.log(convertMinHour(time));
