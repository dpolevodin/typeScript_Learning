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



