
const fs = require('fs');
const contents = fs.readFileSync('./floors.txt', 'utf8');
console.time('funChallenge');
let floor= 0;
let flag = false;
let baseFloor = 0;

for (let j = 0; j < contents.length; j++) {
	
  	if (contents.substr(j, 1) === '(') {
    	floor = floor+1;
    } else if (contents.substr(j, 1) === ')'){
  		floor = floor-1;
  		if(!flag && floor === -1) {
  			baseFloor = j+1;
  			flag = true;
  		}
  	}		
}
console.timeEnd('funChallenge');
console.log('Floor ( Part 1):  ', floor);
console.log('Position when Santa enters Basement for first time : ', baseFloor);



