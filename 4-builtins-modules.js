const os = require('os');
const user = os.userInfo();

console.log(user);
console.log(`System uptime is ${os.uptime()/3600} hours.`)
