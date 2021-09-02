import { mainScript } from './script.js';
export let mydata = {};
let timer_fetch;
var requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

async function fetchvalues() {
  try {
    const response = await fetch(
      'http://localhost:3000/data',
      requestOptions
    );
    const result = await response.json();
    for (let i in result) {
      result[i].nextFiveHrs = ['6°C', '7°C', '11°C', '2°C'];
      mydata[result[i].cityName] = result[i];
    }
    mainScript();
  } catch {
    console.log('error');
  }
}
fetchvalues();
clearInterval(timer_fetch);
timer_fetch = setInterval(() => {
  fetchvalues();
}, 3600000);
