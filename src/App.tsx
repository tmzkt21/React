import React from 'react';
// @ts-ignore
import {BrowserRouter as Route,Link,Router} from 'react-router-dom';
import {Chatbot, Home} from "./component";


class App extends React.Component<any, any>{
    public render() {
    return (
        <Router>
          <Link to="/">홈으로</Link>
          <Link to="/chat">챗봇으로</Link>
          <Route exact path="/" component={Home}/>
          <Route exact path="/chat" component={Chatbot}/>
        </Router>
    );
  }

}

export default App;
