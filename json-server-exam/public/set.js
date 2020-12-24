/*
Set 객체는 중복되지 않는 유일한 값들의 집합. 배열과 비슷해보이지만 동일한 값을
중복하여 포함시킬수도 없고, 요소 순서에 의미가 없고, 의미기 없으니 인덱스로
요소에 접근할 수도 없다.

Set 객체는 Set 생성자 함수로 생성한다. Set 함수에 인수를 전달하지 않으면 
빈 Set 객체가 생성된다.

set생성자 함수는 이터러블을 인수로 전달받아 객체를 생성한다. 중복된 값은 저장안됨

*/

const set = new Set();
console.log(set); // Set {} . 아무것도 전달하지 않았으니 빈 객체
//이렇게하면 안되네?
//const set1 = new Set({1,2,3});

const set1 = new Set([1,2,3,3]);
console.log(set1);

const set2 = new Set('HelloNode');
console.log(set2);

//배열의 중복요소 제거
const unique = array => array.filter((v,i,self) => self.indexOf(v)===i);
console.log(unique([2,3,2,3,1,3,4]));

//set을 이용해서 중복요소 제거
const unique2 = array => [...new Set(array)];
console.log(unique2([2,3,2,3,1,3,4]));

//요소 갯수를 확인할때는 Set.prototype.size 프로퍼티를 사용한다.
//size는 setter함수 없고 getter만 존재하는 접근자 프로퍼티이다.
//그러므로 값을 바꿀수 없음.
const { size } = new Set([1,2,3,4,5]);
console.log(size);
console.log('size의 타입은 ' + typeof size);

const set3 = new Set([1,2,3]);
console.log(Object.getOwnPropertyDescriptor(Set.prototype,'size'));
set3.size = 10; //무시됨
console.log(set3.size); // 3




