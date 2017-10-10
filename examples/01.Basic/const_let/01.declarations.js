// ES5
// var name = 'Jane'
// var title = 'Software Engineer'
// var hourlyWage = 40

// ES6
const name = 'Jane'
// name = 'Yo' const เป็นค่าคงที่ไม่สามารถเปลี่ยนแปลงได้
let title = 'Software Engineer'
title = 'Senior Software Engineer'

console.log('=== Const/Let ===')
const statuses = [ 
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your reqeust is still pending' }
];
let message = '';
let currentCode = 'OK';

for (let i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}

console.log('const ที่เป็น object สามารถเปลี่ยนแปลงค่าภายใน object ได้')