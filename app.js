//format :  Today is : Tuesday.
//          Current time is: 10 PM: 30 : 38


const today = new Date()
const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const day = dayList[today.getDay()]
console.log(`Today is : ${day}.`);
let hr = today.getHours()
let time = 'AM'
if (hr > 13) {
    time = 'PM'
    hr = hr - 12;
}
const min = today.getMinutes()
const sec = today.getSeconds()
console.log(`Current time is: ${hr} ${time}: ${min} : ${sec}`);

document.querySelectorAll('div')[1].innerText = (`Current time is: ${hr} ${time}: ${min} : ${sec}`)
document.querySelectorAll('div')[0].innerText = (`Today is : ${day}.`)
