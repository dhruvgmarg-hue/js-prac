// let score=33
// let score1="33"
// console.log(typeof score);
// console.log(typeof score1);

// let valueInNumber=Number(score1)
// console.log(typeof valueInNumber);


// let a = Date.now()
// console.log(a);

// let b = new Date()
// console.log(b.getFullYear());
// console.log();

import { Temporal } from '@js-temporal/polyfill';

const now = Temporal.Now.plainDateISO();
console.log(now.toString());  // e.g., 2025-09-05
