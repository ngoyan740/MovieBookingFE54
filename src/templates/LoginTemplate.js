import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';


export const LoginTemplate = (props) => {

     //bóc tách
    const { component: Component, path } = props;

    const [obWindow, setObWindow] = useState({
        innerHeight:window.innerHeight,
        innerWidth:window.innerWidth
    });

    const { innerHeight, innerWidth} = obWindow;

    useEffect(() => {

        //Đăng ký sự kiện resize của window
        window.onresize = () => {
            //Lấy width mới của window sau khi resize
            let newWidth = window.innerWidth;
            let newHeight = window.innerHeight;

            setObWindow({
                innerHeight:newHeight,
                innerWidth:newWidth
            })
        }
    }, []);
   
    return <Route path={path} exact render={(propsRoute) => {
        return <>
        <div className="d-flex">
            <div style={{width:innerWidth/3, height:innerHeight}}>
                    <img src="./img/poster.jpg" alt="123" style ={{width:'100%', height:'100%', opacity:0}}/>
            </div>
            <div style={{width:innerWidth/3*2, height:innerHeight}}>
                    <Component {...propsRoute} />
            </div>
        </div>
            
        </>
    }} >

    </Route>

}