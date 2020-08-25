
// Exercise: "Convenience Store"
// Link: https://edabit.com/challenge/erFxBbqzZPSegMwnc

const pocketChange: number[] = [
  2, // quarters
  20, // nickels
  5, // dimes
  0, // pennies
];

function canIBuyIt(change: number[], price: number): string {
  let total: number = change[0] * .25 + change[1] * .1 + change[2] * .05 + change[3] * .01;

  return total > price ? 'Buy It!' : 'You need to ask Garrett for a raise Mike..';
}

console.log(canIBuyIt(pocketChange, 4.25));