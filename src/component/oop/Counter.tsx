import React, {Component} from "react";

interface CounterProps {
    startNumber: number
    //외부에서 전달되는값 프로퍼티를 함수로 준다
}
interface CounterState {
    number: number
    // 반환하는 값
}

//인터페이스 =함수  함수를 받고있기때문에 고차함수
// Component 안에 이미 상태가 있기때문에 oop 방식으로는 순수함수를 짤수가 없다..???

class Counter extends Component<CounterProps,CounterState> {
    // [x: string]: any
    public state = {number:0}
    // state = 상태/객체 {number} = 가변데이터
    props: any
    // 내부에서 초기화

    constructor(props: CounterProps) {
        // props 에 CounterProps 를 넣어주었고
        // CounterProps. startNumber 를 props 에서 뽑아낼수있게되었다
        super(props);
        this.state.number = props.startNumber
    }

    public handleClick = () =>  {
        this.setState({
            number: this.state.number +1
        })
    }
    public render() {
        return <div>
            <h1>{this.state.number}</h1>
            <h1>{this.props.startNumber}</h1>
            <button onClick={this.handleClick}>클릭</button>

        </div>
    }

}
// <h1>{this.state.number}</h1> 누를때마다 숫자올라감 변함
// <h1>{this.props.startNumber}</h1>  변하지않음   props 안변하나??


export default Counter