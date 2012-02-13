
checker = do ->
	counter = (x) ->
		sum = Array.prototype.sum || ->
			total = 0
			for i in [0...@length]
				total += @[i]
			total
		sum.call(x)
	process_carries = (big, size) ->
		for i in [size-1..0]
			if big[i] > 9
				value = big[i]
				carry = (value-(value%10))/10
				big[i] = value%10
				if i is 0
					big.unshift(carry)
					big = process_carries(big, 1)
				else
					big[i-1] += carry
		big
	factorial = (x, raw = false) ->
		big = [1]
		for i in [1..x]
			shifted = false
			for y in [big.length-1..0]
				value = big[y]*i
				big[y] = value
			big = process_carries(big, big.length)
		return big if raw
		big.join('')
	sum_of_digits = (num) ->
		counter factorial(num, true)
	n_given_sum = (num) ->
		interval = 1
		count = 0
		while count < num
			interval += 1
			fact = factorial(interval, true)
			count = counter(fact)
		interval
	{
		n_given_sum: n_given_sum
		sum_of_digits: sum_of_digits
		factorial: factorial
	}