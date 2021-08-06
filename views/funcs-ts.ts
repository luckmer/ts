export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

type mutationFunction = (v: number) => number;

export function ArrayOfNumbers(numbers: number[], mutate: mutationFunction) {
  return numbers.map(mutate);
}

console.log(ArrayOfNumbers([1, 2, 3], (v) => v * 10));

type arrowFunction = (val: number) => number;

export function creator(num: number): arrowFunction {
  return (val: number) => num + val;
}
const addOne = creator(2);

console.log(addOne(231));
