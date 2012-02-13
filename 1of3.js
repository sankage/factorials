var checker;

checker = (function() {
  var counter, factorial, n_given_sum, process_carries, sum_of_digits;
  counter = function(x) {
    var sum;
    sum = Array.prototype.sum || function() {
      var i, total, _ref;
      total = 0;
      for (i = 0, _ref = this.length; 0 <= _ref ? i < _ref : i > _ref; 0 <= _ref ? i++ : i--) {
        total += this[i];
      }
      return total;
    };
    return sum.call(x);
  };
  process_carries = function(big, size) {
    var carry, i, value, _ref;
    for (i = _ref = size - 1; _ref <= 0 ? i <= 0 : i >= 0; _ref <= 0 ? i++ : i--) {
      if (big[i] > 9) {
        value = big[i];
        carry = (value - (value % 10)) / 10;
        big[i] = value % 10;
        if (i === 0) {
          big.unshift(carry);
          big = process_carries(big, 1);
        } else {
          big[i - 1] += carry;
        }
      }
    }
    return big;
  };
  factorial = function(x, raw) {
    var big, i, shifted, value, y, _ref;
    if (raw == null) raw = false;
    big = [1];
    for (i = 1; 1 <= x ? i <= x : i >= x; 1 <= x ? i++ : i--) {
      shifted = false;
      for (y = _ref = big.length - 1; _ref <= 0 ? y <= 0 : y >= 0; _ref <= 0 ? y++ : y--) {
        value = big[y] * i;
        big[y] = value;
      }
      big = process_carries(big, big.length);
    }
    if (raw) return big;
    return big.join('');
  };
  sum_of_digits = function(num) {
    return counter(factorial(num, true));
  };
  n_given_sum = function(num) {
    var count, fact, interval;
    interval = 1;
    count = 0;
    while (count < num) {
      interval += 1;
      fact = factorial(interval, true);
      count = counter(fact);
    }
    return interval;
  };
  return {
    n_given_sum: n_given_sum,
    sum_of_digits: sum_of_digits,
    factorial: factorial
  };
})();