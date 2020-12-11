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


