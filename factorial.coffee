factorial = do ->
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
			carry = 0
			shifted = false
			for y in [big.length-1..0]
				value = big[y]*i
				big[y] = value
				carry = (value-(value%10))/10
			big = process_carries(big, big.length)
		return big if raw
		big.join('')
	factorial

