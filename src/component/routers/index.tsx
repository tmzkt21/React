import {Redirect} from  'react-router-dom'
import React from "react";
import Kitty from "../oop/kitty";
import Chatbot from "../oop/Chatbot";
import Counter from "../oop/Counter";
import Clock from "../oop/Clock";


const  routerConfig = [
    {path: '/', exact: true, component: () => <Redirect to="/home"/>},
    {path: '/chat', component:Chatbot},
    {path: '/count', component: Counter},
    {path: '/clock',component: Clock},
    {path: '/kitty', component: Kitty}
]
//Redirect 리덕스 상태관리
// less  ful
// 상태를 주고받음 리퀘스트바디 등등
// 클라이언트(less) 주고받는 부분만  리덕스
export default routerConfig