/* 매개변수 X, 반환값 X */
function hello() {
  console.log("hello");
}
hello("yanded");

/* 매개변수 O, 반환값 X */
function sayHello(name) {
  console.log(`${name} hello!`);
}
sayHello("KJS");

/* 매개변수 X, 반환값 O */
function sayBye() {
  return "Bye";
}
const bye = sayBye();
console.log(bye);

/* 매개변수 O, 반환값 O */
function sayByeBye(name) {
  return `${name} Bye!`;
}
const byebye = sayByeBye("KJS");
console.log(byebye);

/* 위와 같은 형식으로 유형별 함수를 1개씩 작성 */

/* ==================================== */

const obj = {
  name: "KJS",
  age: 28,
};
const { name, age } = obj;

console.log(obj);
console.log(name);
console.log(age);

/* 위와 같은 형식의 객체를 생성하고 각각의 값을 구조 분해 해서 찍어보기 */

/* ============================================= */

const arr = [1, 2, "안녕", true, "KJS"];
console.log(arr);

const [one, two, hi, bool, kjs] = arr;
console.log(one);
console.log(two);
console.log(hi);
console.log(bool);
console.log(kjs);

/* 위와 같은 형식의 객체를 생성하고 각각의 값을 구조 분해 해서 찍어보기 */

/* ============================================ */
