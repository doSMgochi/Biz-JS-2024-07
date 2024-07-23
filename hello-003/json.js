/**
 * JSON (JavaScript Object Notation, 자바 스크립트 객체 표현식)
 * JS 의 데이터 객체
 */
const arr = []; // 빈(blank) 배열 생성하기, push() 를 사용하여 요소 추가
const obj = {}; // 빈(blank) 객체 (데이터) 생성하기

// JSON 데이터 객체 생성하기
const json = { name: "홍길동", age: 33, tel: "010-1111-1111" };

// obj 객체에 요소 추가하기
obj.name = "이몽룡";
obj.age = 20;
obj.tel = "010-2222-2222";

const viewObject = () => {
  console.log(`json name : ${json.name}`);
  console.log(`json age : ${json.age}`);
  console.log(`json tel: ${json.tel}`);
  console.log(`obj name: ${obj.name}`);
  console.log(`obj age: ${obj.age}`);
  console.log(`obj tel: ${obj.tel}`);
};
export default viewObject;
