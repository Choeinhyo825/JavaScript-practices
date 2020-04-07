// 배열 (Array)

console.log("================생성자 함수================")
var a1 = new Array(); 
console.log(typeof(a1));

var a4 = new Array(10); // 배열을 정의할 때 크기 기정은 별 의미가 없다.
// 동적으로 배열은 늘어난다
console.log(a1.length);
a1[0] = 0;
a1[10] = 10;
a1[11] = 11;
a1[12] = 12;
console.log(a1[1], a1[2]); // 배열 요소에 값을 대입하지 않으면 undefinde
console.log(a1.length);

console.log("================Array VS Object================")
var a = [];
a["0"] = 0;

a["1"] = 1;
a["name"] = 'Arr';
console.log(a["1"], a[1],a["name"], a.length);

var o = {};
o["0"] = 0;
o["1"] = 1;
o["name"] = 'Obj';
console.log(o["1"], o[1], o["name"], o.length);
for(property in a){
    console.log("property : "+ property + " : " + typeof(property));
}

console.log("================리터럴================")
var a2 = [];
console.log(typeof(a2), a2.length);

// 배열 초기화
var a3 = [
function(){
    console.log("hello");
},
20,
"javaScript",
true,
{
    email:'inhyo825@gmail.com',
    name:'최인효'
},
null,
undefined
];
console.log(a3.length);
for (let i = 0; i < a3.length; i++) {
    console.log(a3[i]);
}

a3[0]();
