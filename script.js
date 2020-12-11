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
