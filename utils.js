const sum = function(a, b) {
  return mod(a) + mod(b);
};

const multiply = function (a, b) {
  return a * b;
};

function mod(a) { //-10
    return Math.abs(a);  //10
}

module.exports = {sum, multiply}; 