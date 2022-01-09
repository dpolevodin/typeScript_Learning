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
