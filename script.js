//Task 1
let num = 5,
  str = "5",
  bool = true,
  nul = null;

//Тернарный плюс
console.log(+num); //number -> number
console.log(+str); //string -> number
console.log(+"hello"); // string -> Not-a-Number
console.log(+bool); //boolean -> number; true = 1, false = 0
console.log(+nul); //null -> number

//Шаблонные строки
console.log(`${num}`); //number -> str
console.log(`${bool}`); //boolean -> str
console.log(`${nul}`); //null -> str

//Task 2
let aSide = 5,
  bSide = 4;

perimeter = (aSide + bSide) * 2;
square = aSide * bSide;

console.log(`Сторона а прямоугольника: ${aSide}, сторона b: ${bSide}`);
console.log(`Периметр равен: ${perimeter}`);
console.log(`Площадь равна: ${square}`);
console.log(`Отношение периметра к площади: ${perimeter / square}`);

//Task 3
let Celsius = 25,
  Fahrenheit = 66.2;

console.log(`${Celsius}\xB0C соответствует ${Celsius * 1.8 + 32}\xB0F`);
console.log(`${Fahrenheit}\xB0F соответствует ${(Fahrenheit - 32) / 1.8}\xB0C`);

//Task 4
year = prompt("Введите год");

alert(year % 4 != 0 ? false : year % 100 == 0 ? false : true);
