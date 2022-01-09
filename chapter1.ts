// 3 + []

// Ошибка TS2365: оператор '+' не может быть применен
// для типов '3' и 'never[]'.


// let obj = {}
// obj.foo

// Ошибка TS2339: свойство 'foo' не существует в типе '{}'.


// function a(b: number) {
// return b / 2
// }
// a("z")

// Ошибка TS2345: аргумент типа '"z"' не может быть
// присвоен параметру типа 'number'.

enum Color {
    Red = '#c10000',
    Blue = '#007ac1',
    Pink = 0xc10050,
    White = 255
}

console.log('color', Color.Blue)