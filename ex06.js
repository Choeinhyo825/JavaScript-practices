// object 타입 객체 정의와 생성
// 자바스크립트의 객체는 function타입과 object타입 2가지가 있다.
	// 그런데, 보통 function타입 객체는 함수라 부른다.
	// 따라서, 자바스크립트 객체라 부르는 것은 object타입의 객체를 가리킨다.

	// 생성방법 1 - new 키워드를 사용하는 방법
	var o1 = new Object();
	o1.name = '둘리';
	o1.age = 10;
	o1.another = new Object();
	o1.another.name = '마이클';
	o1.another.age = 30;
	console.log(o1);

	// 생성방법 2 - {} literal 사용하는 방법
	var o2 = {};
	o2.name = '둘리';
	o2.age = 10;
	o2.another = new Object();
	o2.another.name = '마이클';
	o2.another.age = 30;
	console.log(o2);

	// 생성방법 3 - JavaScript Object Notaion : 자바스크립트 객체 표기법
	var o3 = {
		name : '둘리',
		age : 10,
		another : {
			name : '마이클',
			age : 30
		}
	};
	console.log(o3);
	/* XmlHttpRequest 호스트 객체를 사용해서 통신함 */
	
	var response = "{ 'no' : 1, 'name' : '최인효', 'email' : 'inhyo825@gmail.com' }";
	var userVo = eval("("+response+")");
	console.log(userVo);
	