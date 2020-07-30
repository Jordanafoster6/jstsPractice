
// Exercise: "Find the Bomb"
// Link: https://edabit.com/challenge/r4hycBjiBNMs6AAjq

function findTerm(searchValue: string, checkString: string): number {
    return checkString.indexOf(searchValue);
}

function findBomb(checkString: string): boolean {
  const check: string = 'Bomb';
  return findTerm(check.toLowerCase(), checkString.toLowerCase()) > 0 ?? true;
}

const perimeterCheck: string[] = [
  'hello world', // no bomb
  'hello bomb world',
  'hellbombo world',
  'hello bom world', // no bomb
  'hello bo m b world', // no bomb
  'hello BoMb world',
  'hellboMBo world',
  'hello bomab world', // no bomb
];


let bombs: number = 0;
console.log('  ');
console.log('  ');
console.log('-----------------------------');
console.log('Bomb Squad Check the Area');
console.log('-----------------------------');

perimeterCheck.map(possibleBomb => {
  findBomb(possibleBomb) ? (console.log("Probably a bomb dude."), bombs = bombs + 1) : console.log("It's not a bomb Mike.. relax.");
});

console.log('-----------------------------');
console.log('-----------------------------');
console.log(`${bombs} bombs were found Mike`);
console.log('-----------------------------');
console.log('-----------------------------');
console.log('  ');
console.log('  ');