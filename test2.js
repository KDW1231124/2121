const readLine = require('readline-sync')

console.log(Math.PI)

const num = Math.pow(2,4)

console.log(num)
//원넓이 구하기 (나)
//r1 = Math.pow(20,2) * Math.PI

//const r2 = Math.pow(10,2) * Math.PI

//const r3 = r1 - r2

//console.log(r3)

// 강사님 해설
//주어진 데이터

const r1 = 10
const r2 = 20

//원의 넓이
const area1 = Math.pow(r1,2) * Math.PI
const area2 = Math.pow(r2,2) * Math.PI

//둘의 차이
let gap = area1 - area2
//음수가 발생할수있음
// if, 삼향연산자 어떤걸쓸까
// -1을 곱하면 값이 변하므로 let으로 바꿔준다

//if
//if(gap < 0){
   // gap = gap * -1
//

//삼항연산자
gap = gap < 0 ? gap * -1 : gap

//console.log("이 도형의 넓이는 " + gap + "입니다")

console.log(`이 도형의 넓이는 ${gap}  입니다.`)

//소수점 이하 둘째자리만 나오게하고싶다
//
console.log(gap.toFixed(2))
