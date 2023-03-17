type Age = number;
type Name = string;
type Player = {
readonly name: Name;
age?: Age;
};

const playerMaker = (name: string): Player => ({ name });

const nico = playerMaker("nico");
nico.age = 30;

const numbers: readonly number[] = [1, 2, 3, 4];
//numbers.push(10)

const names: readonly string[] = ["1", "2"];

const player: readonly [string, number, boolean] = ["nico", 1, true];
//player[0] = "hi"

//type Add = (a: number, b: number) => number; //함수형 타입 지정
type Add = {
(a: number, b: number): number;
(a: number, b: number, c: number): number;
};

//const add: Add = (a, b) => a + b;
//const add = (a:number, b:number) => a + b
//const add : Add = (a, b) => {
// if(typeof b === "string") return a;
// return a + b;
//}
const add: Add = (a, b, c?: number) => {
if (c) return a + b + c;
return a + b;
};

add(1, 2);
add(1, 2, 3);

type Config = {
path: string;
state: object;
};

type Push = {
(path: string): void;
(config: Config): void;
};

const push: Push = (config) => {
if (typeof config === "string") {
console.log(config);
} else {
console.log(config.path);
}
};
