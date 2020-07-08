export default function operator() {
    console.log(`--- 1. 산술연산자 ----`)
    console.log(`10 ** 3 = ${10 ** 3}`)
    console.log(`--- 2. 부정연산자 ---`)
    console.log(`!"hello" = ${!"hello"}, !!"hello" = ${!!"hello"}`)
    console.log(`!0 = ${!0}, !!0 = ${!!0}, !1= ${!1}, !2 = ${!2}`)
    console.log(`!true = ${!true}, !!true = ${!!true}`)
    destructure()
}
// export default function operator()    모듈 디포트 호이스팅
// function operator()  funcion 호이스팅
//
export function destructure() {
    console.log(`--- 1. 객체 구조분해 ----`)
    let {a, b, ...c} = {a: 10, b: 20, c: 30, d: 40}
    console.log(`${a}`)
    console.log(`${b}`)
    console.log(`${c}`)
    console.log(`--- 2. 배열 구조분해 ----`)
    let numbers = ["a", "b", "c", "d", "e"]
    let [num1, num2] = numbers
    console.log(`[num1, num2] ==> ${num1}, ${num2}`)

    let [,, num3, num4,] = numbers
    // @ts-ignore
    console.log(`[,, num3, num4] ==> ${num3}, ${num4}`);
    // 디스트럭처링을 이용한 변수 값 교체
    [num4, num3] = [num3, num4]
    console.log(`[num4, num3] = [num3, num4] ==>  ${num3}, ${num4}`)
    console.log(`[,, num3, num4] ==> ${num3}, ${num4}`)

    console.log(`--- 3. 함수 배열 구조분해 ----`)

    fn([100, "Hello"])
    function fn([a, b]: [number, string]){
        console.log(`함수배열 내부 ${a}`)
        console.log(`함수배열 내부 ${b}`)
    }

    printProfiler({name:"홍길동"})// 국적은 korea 디폴트 값으로 작용
    printProfiler({name:"유관순",nation:"USA"})
    // printProfiler({nation:"USA"})
    // 디폴트 값(name)이 없으면 생략이 불가능
    console.log(`--- 4. 함수 객체 구조분해 ----`)
    function printProfiler({name,nation="korea"}={name:""}){
        console.log(name,nation)
    }
    //함수 객체

    let test = function(){}
    let test1 = ()=>{}
    console.log(`[num1, num2] ==> ${num1}, ${num2}`)

    console.log(`--- 5. 사용자 타입 객체 구조분해 ----`)
    // custom
    // fruit("사과", 1000)

    type Custom = {a:string,b:number}
    function fruit({a,b}:Custom={a:"사과",b:1000}){
        console.log(a,b)
    }
    fruit()



    // function fruit({a,b}={a:"사과",b:1000}:Custom){
    //     console.log(a,b)
    // }

    // fruit({a:"사과",b:1000})

    spread()
}

export function spread() {
    console.log(`--- 1. 스프레드 연산자 ----`)
    // 배열 합치기
    let arr: number[] = [0,1,2]
    let arr2: number[] = [...arr,3,4]
    console.log(`배열 1번 째 형태 ${arr2}`)
    // 배열 디스트럭쳐링
    let [a, ... rest]: [number, number, number, number] = [1, 2, 3, 4]
    console.log(`배열 2번 째 형태 ${a}`)
    console.log(`배열 3번 째 형태 ${rest}`)
    console.log(`배열 4번 째 형태 ${rest[0]}`)

 }



// export function test(a , b, callback) {
//     console.log("나는 이승규다, a:%s, b:%s");
//     callback('콜백');
//     console.log("나는 이승규다, a:%s, b:%s", a, b);
//
//     test(1,2,function (msg) {
//         console.log(msg)
//     })
//
// }
// export function foo(a, b, callback)
// {
//     console.log("i'm foo(), a:%s, b:%s", a, b);
//     callback('success call foo()');
// }
//
//     foo(1, 2, function(msg){
//     console.log(msg);
// });
//$ node foo.js
// i'm foo(), a:1, b:2
// success call foo()
