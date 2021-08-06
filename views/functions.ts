function functions(a: number, b: number | string) {
  return `${a} ${b}`;
}
export default functions;

export function Strings(a: number, b: number = 0): number {
  return a * b;
}

export const format = (title: number, param: string | number = 0) =>
  `${title} ${param}`;

export function Formats(a: number, b: number = 0): void {
  console.log(format(a, b));
}

export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`data ${url}`);

const introduce = (sal: string, ...names: string[]): string => {
  return `${sal} ${names}`;
};

export function GetName(user: { first: string; last: string }): string {
  return `${user?.first ?? "John"} ${user?.last ?? "Marry"}`;
}
