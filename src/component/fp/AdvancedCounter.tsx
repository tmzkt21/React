import React,{useReducer} from "react";

//React.FC funcion component
// count state?..
// oop class
// fp  funcion 함수형 만 정리
type Action = { type: 'INCREASE'} | {type: 'DECREASE'}
function reducer(state: number, action: Action){
    switch (action.type) {
        case "INCREASE": return state  +1
        case "DECREASE": return  state -1
        default: throw  new Error("unhanced action")
    }
}
// React.fc = state 가 없다 무상태 순수함수
const AdvancedCounter: React.FC = () =>{
    const [count,dispatch] =useReducer(reducer,0)
    const onIncrease = () => dispatch({type: 'INCREASE'})
    const onDecrease = () => dispatch({type: 'DECREASE'})
    return <div>
        <h1>{count}</h1>

        <div>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    </div>
}
export default AdvancedCounter