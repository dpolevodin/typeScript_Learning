// const message = 1_000_000
// const printMessage = (message: number) => console.log(typeof message)
// printMessage(message)

import { type } from "os";

// let a = 1 + 2
// let b = a + 3
// let c = {
//     apple: a,
//     banana: b
// }
// let d = c.apple * 4
// let e = (message) => message

// let c: {
//     firstName: string,
//     lastName: string
// } = {
//     firstName: 'Lion',
//     lastName: 'King',
// }

// --- Псевдонимы типов ---

// type Age = number - с большой буквы!

// type Person = {
//     name: string,
//     age: Age,
// }

// --- Области видимости псевдонимов типов ---

// type Color = 'red'
// let x = Math.random() < .5
// if (x) {
// type Color = 'blue' // Здесь перекрывается Color, объявленный выше.
// let b: Color = 'blue'
// } else {
// let c: Color = 'red'
// }

// --- Пересечения и объединения ---
// type Cat = {name: string, purrs: boolean}
// type Dog = {name: string, barks: boolean, wags: boolean}
// type CatOrDogOrBoth = Cat | Dog
// type CatAndDog = Cat & Dog

// enum Color {
//     Red = '#c10000',
//     Blue = '#007ac1',
//     Pink = 0xc10050,
//     White = 255
// }
// let mainColor = Color.Blue
// console.log('Maincolor ', mainColor, ' ', typeof Color)

// const enum Language {
//     English,
//     Spanish,
//     Russian
// }

// let a = Language.English
// let b = Language.German  // ошибка свойство не существует в типе "typeof Language"
// let c = Language[2]
// console.log(c) // ошибка, т.к. к константам только по строковому литералу

// let a = 1042
// console.log(typeof a) // number
// let b = 'apple & oranges'
// console.log(typeof b) // string
// let c = 'pineapples'
// console.log(typeof c) // string
// let d = [true, true, false]
// console.log(typeof d) // object
// let e = {type: 'ficus'}
// console.log(typeof e) // object
// let f = [1, false]
// console.log(typeof f) // object
// const g = [3]
// console.log(typeof g) // object
// let h = null
// console.log(typeof h) // object

// ------- ФУНКЦИИ ---------- //

function add(a: number, b: number): number {
  return a + b;
}

// Именованная функция
function greet(name: string) {
  return "hello, " + name;
}

// Функциональное выражение
let greet2 = function (name: string) {
  return "hello, " + name;
};

// Выражение стрелочной функции
let greet3 = (name: string) => {
  return "hello, " + name;
};

// Сокращенное выражение стрелочной функции
let greet4 = (name: string) => "hello, " + name;

//Конструктор функции
let greet5 = new Function("name", 'return "hello" + name'); // не рекомендуется

// Функция со списком аргументов
function sum(numbers: number[]): number {
  return numbers.reduce((total, next) => total + next, 0);
}
console.log(sum([1, 2, 3])); // вернет 6 - number

// Alternative

function sumVariadic(...numbers: number[]): number {
  return Array.from(arguments).reduce((total, n) => total + n, 0);
}
console.log(sumVariadic(1, 2, 3)); // вычисляется как 6

// Функция-генератор

function* createFibonacciGenerator() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}
let fibonacciGenerator = createFibonacciGenerator();
// IterableIterator<number>
fibonacciGenerator.next();
// вычисляется как {значение:
// выполнено: false}
fibonacciGenerator.next();
// вычисляется как {значение:
// выполнено: false}
fibonacciGenerator.next();
// вычисляется как {значение:
// выполнено: false}
fibonacciGenerator.next();
// вычисляется как {значение:
// выполнено: false}
fibonacciGenerator.next();
// вычисляется как {значение:
// выполнено: false}
fibonacciGenerator.next();
// вычисляется как {зн
