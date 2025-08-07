'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  return function(a) {
    return function(b) {
      callCount++;
      if callCount <= 3 {
        return a + b
      } else {
        return callCount % 2 === 0 ? "Bzzz... Error!" : a + b;
      }
    };
  };
}

module.exports = makeRobotAccountant;
