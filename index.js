function notify() {
  window.beep.play();
}

function timeCharToSeconds(haystack) {
  if (time.indexOf('m') != -1) {
    return 60000;
  } else if (time.indexOf('s') != -1) {
    return 1000;
  } else {
    return 1;
  }
}

function cue(action, time) {
  actualTime = parseInt(time) * timeCharToSeconds(time);

  if (action == 'every') {
    setInterval(notify, actualTime);
  } else if (action == 'once') {
    setTimeout(notify, actualTime);
  }
}

function updateDetail(action, time) {
  document.querySelector('#detail').innerText = action + " " + time
}

const urlParams = new URLSearchParams(window.location.search);
const action = urlParams.get('action') || 'every';
const time = urlParams.get('time') || '5m';

cue(action, time);
updateDetail(action, time);
