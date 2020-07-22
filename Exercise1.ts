

function findTerm(searchValue: string, checkString: string): boolean {
    return RegExp(`\\b(\\w*${searchValue}\\w*)\\b`, 'g').test(checkString);
}

function findBomb(checkString: string) {
  const check: string = 'Bomb';
  return findTerm(check.toLowerCase(), checkString.toLowerCase());
}

const perimiterCheck: string[] = [
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

perimiterCheck.map(possibleBomb => {
  bombs = findBomb(possibleBomb) ? bombs + 1 : bombs;
  findBomb(possibleBomb) ? console.log("Probably a bomb dude.") : console.log("It's not a bomb Mike.. relax.");
});

console.log('-----------------------------');
console.log('-----------------------------');
console.log(`${bombs} bombs were found Mike`);
console.log('-----------------------------');
console.log('-----------------------------');
console.log('  ');
console.log('  ');