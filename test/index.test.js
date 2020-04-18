/* eslint-disable no-console */
const assert = require('assert');
const { remap } = require('..');

console.log('Testing:');

const test = (example, expected) => {
  assert.equal(example, expected);
  console.log(`\u001B[32m✓\u001B[39m ${expected}`);
};

test(remap(50, 0, 100, 0, 360), 180);

// from decimal
test(remap(0.5, 0, 1, 0, 360), 180);

// to decimal
test(remap(180, 0, 360, 0, 1), 0.5);

// from decimal to decimal
test(remap(0.5, 0, 1, 0, 3), 1.5);

// negative values
test(remap(0, -5, 5, 10, 20), 15);
test(remap(-5, -10, -5, -100, -50), -50);
