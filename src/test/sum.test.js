const {sumTwoNumbers} = require('../index');

test('adds 3 + 8 to equal 11', () => {
   expect(sumTwoNumbers(3, 8)).toBe(11)
});

test('message "Send only numbers" when user send a string', () => {
   expect(sumTwoNumbers(3, 'asd')).toBe('Send only numbers')
});