
// Exercise: "How Many Vowels?"
// Link: https://edabit.com/challenge/3EQGHyiYTNc9LPmhF

function countVowels(word: string): number {
  let count: number = 0;
  const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];

  vowels.map(v => {
    count += word.split('').filter(letter => letter === v).length;
  });

  return count;
}

const test: string = 'pneumonoultramicroscopicsilicovolcanoconiosis';

console.log('  ');
console.log('  ');
console.log('-----------------------------');
console.log(`String: ${test}`);
console.log('  ');
console.log(`Vowel Count: ${countVowels(test)}`);
console.log('-----------------------------');
console.log('  ');
console.log('  ');
