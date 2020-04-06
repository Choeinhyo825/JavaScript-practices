// null 과 undefined
var myVar1;
var myVar2 = null;

console.log(myVar1 + " : " + myVar2); // undefined : null
console.log(typeof (myVar1) + " : " + typeof (myVar2)); // undefined : object

console.log(myVar1 == myVar2); // 값 비교 -> true
console.log(myVar1 === myVar2); // 타입비교 -> false

console.log("====================");
// == : equality, 값의 등치성, 형변환 O
console.log(1 == "1"); // true
console.log(true == "1"); // true
console.log('abc' == new String('abc')); // true

console.log(true + 10); // 11 (number)
console.log('abc' + new String('abc')); // abcabc
console.log(1 + "1"); // 11 (string)
console.log("1" + 1); // 11 (string)

console.log("====================");
// === : identity, 객체의 동일성, 형변환 X
console.log("2" === 2); // false
console.log(true === 1); // false
console.log('abc' === new String('abc')); // false

console.log("====================");
// 추천
var str = "5";
console.log(parseInt(str) == 5); // true