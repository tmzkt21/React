export default function isType():void {
        console.log("------------Javascript Types ------------")
        /*
        * Types: boolean, number, string, undeifined ,
        *  null JSON,array funcion
        * 내부적으로 인식 prottype  프로토타입 이다
        * 눈에 볼수없고 정의되어 있다고한다
        * undefined == null //true
          undefined === null //false
          * null 값이없는 객체가없는상태
          * undefined 주소가 없는상태
          * undefiend : 변수는 존재하나, 어떠한 값으로도 할당되지 않아 자료형이 정해지지(undefined) 않은 상태입니다.
            null : 변수는 존재하나, null 로 (값이) 할당된 상태. 즉 null은 자료형이 정해진(defined) 상태입니다.
        * */

        let myBoolean = true
        let number = 0
        let string = ''
        let undeifined = undefined
        //undefiend : 변수는 존재하나, 어떠한 값으로도 할당되지 않아 자료형이 정해지지(undefined) 않은 상태입니다.
        // 즉 주지않은상태 큰개념
        let mynull = null
        //null : 변수는 존재하나, null 로 (값이) 할당된 상태. 즉 null은 자료형이 정해진(defined) 상태입니다.
        //object 의 시작 없는상태..?
        let JSON = {"JSON":"제이슨"}
        // Json 객체인게 당연
        let array = ["array","어래이~"]
        // array 객체를 참조하는 배열 내부 객체가 있어 타입은 object
        let funcion= function(a){return}
        // funcion 은 json 이 나오기전  object

            console.log(`boolean : ${typeof myBoolean}
                         number : ${typeof number}  
                         string : ${typeof string}
                         undeifined : ${typeof undeifined}
                         null : ${typeof mynull} , ${mynull}
                         JSON : ${typeof JSON} 
                         array : ${typeof array}
                         function : ${typeof funcion}`)
        tsType()
        symbol()
        tupleType()

}
export function tsType():void {
        let basket: any = 10
        basket = true
        basket = "TV"
        // TV 로 오버라이딩
        // console.log(basket)

        let arr:string[] = ["a","b","c"]
        for (let i=0; i<arr.length;  i++){
                // console.log(`${arr1[i]}\t`)
        }
        let arr2: Array<string> = ["a","b","c"]
        for (let i=0; i<arr.length;  i++){
            console.log(`${arr2[i]}\t`)
        }
        console.log(`---------------enum type--------------`)
        enum WeekDay {
                Mon = 0, Tue , Wed = 2 , Thu = Tue + Wed
                //{"0":"Mon","1":"Tue","2":"Wed","3":"Thu","Mon":0,"Tue":1,"Wed":2,"Thu":3}
        }
        let thu2: number = 10 * 2
        enum WeekDay2{
                Mon = 10, Tue , Wed = 10 << 2 , Thu = thu2
        }
        enum WeekDay3{
                Mon = "Monday", Tue= "Thusday"
        }
        console.log(`1. ${JSON.stringify(WeekDay)}`)
        // {"0":"Mon","1":"Tue","2":"Wed","3":"Thu",
        //  "Mon":0,"Tue":1,"Wed":2,"Thu":3}
        console.log(`2. ${JSON.stringify(WeekDay2)}`)
        console.log(`3. ${JSON.stringify(WeekDay3)}`)
        console.log(`4. Mon = ${WeekDay.Mon}, Tue = ${WeekDay["Tue"]}, Wed=${WeekDay.Wed}`)
        console.log(`5. 0 = ${WeekDay[0]}, 1 = ${WeekDay[1]}, 3=${WeekDay.Wed}`)
        console.log(`6. ${typeof WeekDay}`)
        console.log(`7. ${typeof WeekDay.Mon}, ${typeof WeekDay3.Mon}`)
        console.log(`8. ${typeof WeekDay[0]}, ${WeekDay[0]}`)

        // let myDay: WeekDay = 50
        let myDay:WeekDay = WeekDay.Mon
        console.log(`9. ${typeof myDay}, ${myDay}`)
        let myDay2:WeekDay2 = WeekDay2.Mon
        console.log(`10. ${typeof  myDay2}, ${myDay2}`)


}
export function symbol():void {
        const hello = Symbol("hello")
        const hello2 = Symbol("hello")
        // @ts-ignore
        console.log(hello === hello2)
        // @ts-ignore
        console.log(hello == hello2)
        console.log(hello,hello2)
        console.log(typeof hello2)
        // 자바스크립트의 객체는 제이슨
        // ts  제이슨은 ts 에서도 객체이지만  enum symbol 타입으로 정의되었다 이넘타입 심볼타입
        // 모든것은 객체다..?

        console.log(`---------Symbol2-------`)
        const uniqueKey = Symbol()
        // { [Symbol()]: 1234 }   Symbol() 자체가 키값이 된다
        let obj = {}
        obj[uniqueKey] = 1234
        console.log(obj)


}
export function tupleType():void  {
        let x:[string, number]
        x=["tuple",100]
        console.log(`---------시작-------`)
        console.log(typeof x, typeof x[0],typeof x[1])
        //object string number
        console.log(`----------------`)
        console.log(x[0].substr(0,2),x[1].toFixed(2))
        // tu 100.00
        console.log(`----------------`)
        let x2:[string,boolean,string,boolean] = ["tuple",true,"tuple2",false]
        //[ 'tuple', true, 'tuple2', false ]
        console.log(x2)
        console.log(`----------------`)
}
