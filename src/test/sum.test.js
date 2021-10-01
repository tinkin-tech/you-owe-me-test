const {sumTwoNumbers} = require('../index');

test('adds 3 + 8 to equal 11', () => {
   expect(sumTwoNumbers(3, 8)).toBe(11)
});