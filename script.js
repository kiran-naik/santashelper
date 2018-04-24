console.time('funChallenge');
const fs = require('fs');
const contents = fs.readFileSync('./floors.txt', 'utf8');
let floor= 0;

for (let j = 0; j < contents.length; j++) {
  	if (contents.substr(j, 1) === '(') {
    	floor = floor+1;
  	} else if (contents.substr(j, 1) === ')'){
  		floor = floor-1;
  }
}
console.log('Floor', floor);
console.timeEnd('funChallenge');


