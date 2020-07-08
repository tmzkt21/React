export default function loop() {
    whileLoop() // 0 es5
    dowhile()// 1 es5
    forLoop() // 2 es5
    forInArrayLoop() // 3
    forInOfjectLoop() // 4
    forOfArrayLoop() // 5
    forOfMapLoop() //6
    forOfSetLoop() //7
    forOfStringLoop() //8
    symbolIterator() // 9
}
export function whileLoop() {

    console.log(`--------------0. while-loop ---------------------`)
    let i = 0
    let a = 0
    while (i<=100){
        a += i++
    }
    console.log(`1부터 100까지 합:${a}`)
    //숙제 젠장 자바에서 했음 와일문으로
}
export function dowhile() {
    console.log(`--------------1. do-while-Loop ---------------------`)
    let a = 0
    let count: number = 0
    do{
        // 직접처리
        a += count++
    }while (count <= 100)
    console.log(`1부터 100까지 합:${a}`)
    //숙제 젠장
}
export function forLoop() {
    console.log(`--------------2. for-Loop ---------------------`)
    let a  = 0
    for (let i=0; i<=100; i++){
       a = a+i;
    }
    console.log(`1부터 100까지 합:${a}` )
    // 포룹으로
}
function forInArrayLoop() {
    console.log(`--------------3. forInArray-Loop ---------------------`)
}
function forInOfjectLoop() {
    console.log(`--------------4. forInOfject-Loop ---------------------`)
}
function forOfArrayLoop() {
    console.log(`--------------5. forOfArray-Loop ---------------------`)
}
function forOfMapLoop() {
    console.log(`--------------6. forOfMap-Loop ---------------------`)
}
function forOfSetLoop() {
    console.log(`--------------7. forOfSet-Loop ---------------------`)
}
function forOfStringLoop() {
    console.log(`--------------8. forOfString-Loop ---------------------`)
}
function symbolIterator() {
    console.log(`--------------9. symbol-Iterator ---------------------`)
}
