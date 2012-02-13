var factorial;

factorial = (function() {
  var process_carries;
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
    var big, carry, i, shifted, value, y, _ref;
    if (raw == null) raw = false;
    big = [1];
    for (i = 1; 1 <= x ? i <= x : i >= x; 1 <= x ? i++ : i--) {
      carry = 0;
      shifted = false;
      for (y = _ref = big.length - 1; _ref <= 0 ? y <= 0 : y >= 0; _ref <= 0 ? y++ : y--) {
        value = big[y] * i;
        big[y] = value;
        carry = (value - (value % 10)) / 10;
      }
      big = process_carries(big, big.length);
    }
    if (raw) return big;
    return big.join('');
  };
  return factorial;
})();