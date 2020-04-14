/* 매개변수 X, 반환값 X */
function name() {
  console.log("kimjeongseok");
}
name("kjs");

/* 매개변수 O, 반환값 X */
function sayName(spring) {
  console.log(`${spring}은 본명은 김정석 입니다~!`);
}
sayName("KJS");

/* 매개변수 X, 반환값 O */
function add() {
  return "Hello";
}

const hi = add();
console.log(hi);

/* 매개변수 O, 반환값 O */
function abc(name) {
  return `${name}은 바보!`;
}
const cba = abc("김정석");
console.log(cba);

//====== 객체 구조 분해 =======

const kimjeongseok = {
  name: "김정석",
  age: 27,
  actor: "김긍정",
};

function print({ name, actor }) {
  const print = `${actor}의 본명은 ${name}입니다!`;
  console.log(print);
}
print(kimjeongseok);

// === 객체[배열?] 구조 분해 ===
const array = [1, 2, "김긍정", false, 5];
console.log(array);

const [one, two, three, bye, kjs] = array;
console.log(one);
console.log(two);
console.log(three);
console.log(bye);
console.log(kjs);
