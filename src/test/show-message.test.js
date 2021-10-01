const {showMessageName} = require('../index');

test('message "Hello Tinkin, how are you?", when not sending a name', () => {
   expect(showMessageName()).toBe('Hello Tinkin, how are you?')
});

test('message "Hello Javier, how are you?", when send name Javier', () => {
   expect(showMessageName('Javier')).toBe('Hello Javier, how are you?')
});
