import hello, {goodbye,birthday,add} from "./hello";
import isType from "./isType";
import operator from "./operator";
import loop  from "./loop";

let menu = 3
let name:string = ""
switch (menu) {
    case 0:
       name = "이승규"
       let names = goodbye(name)
        console.log(names)
        break
    // hello.ts goodby 사용
    case 1:
        name = "이승규"
        let year = 1995
        let profile = birthday(name,year)
        console.log(profile)
        break
    case 2:
        let num1:number = 10
        let num2:number = 30
        let addResult: number = add(num1, num2)
        console.log(`덧셈결과:  ${addResult}`)
        break
    case 3:
        isType()
        break
    case 4:
        operator()
        break
    case 5:
        loop()
        break
    default :
        console.log("존재하지 않는 케이스입니다.")
        break
}