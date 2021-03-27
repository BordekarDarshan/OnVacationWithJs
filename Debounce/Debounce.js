function logName() {
  console.log("Darshan");
}

function debounce(callBack, delay) {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(callBack, delay);
  };
}

debounce(logName, 2000);
