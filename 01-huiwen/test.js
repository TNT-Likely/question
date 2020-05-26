const isPalindrome = require('./lib')
const assert = require('assert')

assert.strictEqual(isPalindrome('aba'), true)
assert.strictEqual(isPalindrome('abca'), true)
assert.strictEqual(isPalindrome('abcea'), false)