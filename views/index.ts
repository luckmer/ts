let test: string = "string";
let has: boolean = true;

test += "hey";

let number: number = 121;

let regex: RegExp = /foo/;

//arrays
const names: string[] = test.split(" ");

const myValues: Array<number> = [1];

//objects

interface Person {
  first: string;
  last: number;
}

const Personal: Person = {
  first: "das",
  last: 231,
};

const ids: Record<number, string> = {
  10: "a",
  20: "20",
};

ids[30] = "c";

const array: (string | number)[] = ["das", 12];
