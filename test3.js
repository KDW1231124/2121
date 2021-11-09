//철근문제
//1ft 3.5
// 300 * 200 cm
var readlineSync = require('readline-sync');



//단위가격 설정
console.log("1피트당 삿시의 가격은 얼마인가요?")
const perFeet = parseFloat(readlineSync.prompt())

console.log("가로길이는 얼마인가요? cm")
const width = parseInt(readlineSync.prompt())

console.log("세로길이는 얼마인가요? cm")
const height = parseInt(readlineSync.prompt())

//창문 => 가로 * 2, 세로 * 2 => 전체 샷시 길이

const totalLength = (width + height) * 2

//길이(cm) => ft
const totalfeet = Math.ceil(totalLength / 30.48)

console.log(totalfeet)

//가격 계산

const totalprice = totalfeet * perFeet
console.log(`총 ${totalprice} 달러입니다. `)

//JS의 예외처리 'try'


