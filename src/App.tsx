import React,{Component} from "react";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css'
import {Home, Chatbot, Clock, Counter, Kitty} from "./component";
import Navigator from "./component/common/Navigator";



class App extends Component<any, any>{

    public render() {
        return <div>
            <Router>
                <Navigator/>
                <Link to="/">홈으로</Link><br/>
                <Link to="/chat">챗봇으로</Link><br/>
                <Link to="/clock">시계확인</Link><br/>
                <Link to ="/count">카운터 세기</Link><br/>
                <Link to="/kitty">고양이귀여움</Link><br/>
                <Route exact path ="/" component={Home}/>
                <Route exact path="/chat" component={Chatbot}/>
                <Route exact path="/clock" component={Clock}/>
                <Route exact path="/count"  ></Route>
                <Counter startNumber={1}></Counter>
                <Route exact path="/kitty" component={Kitty}/>
            </Router>
        </div>
    }
}

export  default App