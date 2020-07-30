
// Exercise: "Repeating Letters"
// Link: https://edabit.com/challenge/Mc6Xi4PRw7fDzeMDB

function doubleChar(str) {
  let repeat = str.split('').map(letter => {
    return letter += letter;
  });
  return repeat.join('');
}

const test: string = 'Howdy Mike';

console.log(`Start String: ${test}`);
console.log(`Doubled Output: ${doubleChar(test)}`);