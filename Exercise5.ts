
// Exercise: "Convert Key, Values in an Object to Array"
// Link: https://edabit.com/challenge/4aaBNPnFMc3bzR7JR

interface teamMember {
  name: string;
  team: string;
  company: string;
  pay: number;
}

const myObject: teamMember = {
  name: 'jordan',
  team: 'frontend',
  company: 'Drive Social Media',
  pay: 100000, // * wink wink *
};

function objectToArray(member: teamMember): void {

  // I wanted to use Object.entries() but after Googling it and I would
  // need to add '"lib": [ "es2017.object" ]' to the TypeScript config
  // which im assuming would be bad practice since its from 2017??

  console.log(Object.keys(member).map(info => [info, member[info]]));
}

objectToArray(myObject);