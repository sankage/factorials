Factorials
==========

## DESCRIPTION

For factorials of sufficient size, Javascript is unable to process them. I have written this to allow for larger factorials by using an array of single digits to base the math on.

## USAGE

Using `factorial.js`

For finding the factorial of a number, call:

```javascript
> factorial(10)
  "3628800"
> factorial(50)
  "30414093201713378043612608166064768844377641568960512000000000000"
```

If you wish to see the array form of the number, call:

```javascript
> factorial(10, true)
  [3, 6, 2, 8, 8, 0, 0]
> factorial(50, true)
  [3, 0, 4, 1, 4, 0, 9, 3, 2, 0, 1, 7, 1, 3, 3, 7, 8, 0, 4, 3, 6, 1, 2, 6, 0, 8, 1, 6, 6, 0, 
  6, 4, 7, 6, 8, 8, 4, 4, 3, 7, 7, 6, 4, 1, 5, 6, 8, 9, 6, 0, 5, 1, 2, 0, 0, 0, 0, 0, 0, 0, 
  0, 0, 0, 0, 0]
```

## LIMITS

Given [ECMA Section 8.5 - Numbers](http://ecma262-5.com/ELS5_HTML.htm#Section_8.5), `9007199254740992` is the maximum integer Javascript allows.

As a result of this limit, this code should theoretically work up to `1000799917193443!`.

Given that each iteration multiplies the array components by the next highest integer up to the desired factorial and that the highest possible multiple in the array is a single digit: 9, at the final iteration you would possibly be multiplying `1000799917193443 * 9 = 9007199254740987` at each index in the array.