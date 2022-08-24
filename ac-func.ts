import * as fs from 'fs';

let inputLinesIndex: number = 0;
// const inputLines = fs.readFileSync('/dev/stdin', 'utf8').split('\n');
const inputLines: string[] = fs.readFileSync('./input.txt', 'utf8').split('\n');

const input = () => inputLines[inputLinesIndex++];

const print = (messages: any[]) => {
  let output: string = messages.join('\n');
  console.log(output);
}

const max = (data: number[]) => data.reduce((a, b) => Math.max(a, b));
const min = (data: number[]) => data.reduce((a, b) => Math.min(a, b));
const sum = (data: number[]) => data.reduce((a, b) => a + b);
const mean = (data: number[]) => sum(data) / data.length;

function main() {
}

main()
