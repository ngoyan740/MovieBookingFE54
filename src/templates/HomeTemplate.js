import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header/Header';



export const HomeTemplate = (props) => {
    //cho nhận vào 1 props sau đó tạo const kiểu bóc tách phần tử
    const {component:Component, path} = props // props có thuộc tính là Component
    return <Route path={path} exact render={(propsRoute) =>{
        return <div>
            <Header />
            {/* <Component {...propsRoute} /> */}
            <props.component {...propsRoute} />
        </div>
    }} />

}