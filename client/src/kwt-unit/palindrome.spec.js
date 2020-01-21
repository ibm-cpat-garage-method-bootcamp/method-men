const isPalindrome = (phrase) => {
  if (phrase === '') {
      throw new Error('empty string was given');
  }

  let startIndex = 0;
  let endIndex = phrase.length - 1;
  while (startIndex <= endIndex) {
      if (phrase[startIndex] !== phrase[endIndex]) {
          return false;
      }
      startIndex++;
      endIndex--;
  }
  
  return true;
}

describe('palindrome', () => {
    test('canary verifies test tools', () => {
        expect(true).toEqual(true);
    });

    test('racecar is a palindrome', () => {
        expect(isPalindrome('racecar')).toEqual(true);
    });

    test('racecars is not a palindrome', () => {
        expect(isPalindrome('racecars')).toEqual(false);
    });

    test('a is a palindrome', () => {
        expect(isPalindrome('a')).toEqual(true);
    });

    test('dude is not a palindrome', () => {
        expect(isPalindrome('dude')).toEqual(false);
    });

    test('mom mom is a palindrome', () => {
        expect(isPalindrome('mom mom')).toEqual(true);
    });

    test('empty string throws an error', () => {
        expect(() => {
            isPalindrome('');
        }).toThrow(new Error('empty string was given'));
    })
});