
// Exercise: "Concatenate Variable Number of Input Arrays"
// Link: https://edabit.com/challenge/Hs4TpDHX57Rqegmgg

function concatArrays(numberSets: number[][]): number[] {
  return [].concat.apply([], numberSets);
}

// I have several questions on this one so let me know when you're reviewing

console.log(concatArrays([[1, 2, 3], [4, 5], [6, 7]]));