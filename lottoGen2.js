//로또 용지 준비
const arr = []

for (let i = 0; i<= 45 ; i++ ) {
    arr.push(i)

}
console.log(arr)
//배열에서부터 6번뽑기

for (let i = 0; i < 6 ; i++ ) {

    const idx = parseInt(Math.random() * arr.length)

   console.log(arr.splice(idx,1))



}