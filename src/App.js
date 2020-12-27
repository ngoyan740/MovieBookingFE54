import logo from './logo.svg';
import './App.css';

import {Router, Route, Switch} from 'react-router-dom'
import TrangChu from './pages/TrangChu/TrangChu';
import DangNhap from './pages/DangNhap/DangNhap';
import DangKy from './pages/DangKy/DangKy';
import ChiTietPhim from './pages/ChiTietPhim/ChiTietPhim';
import Header from './components/Header/Header';
import { HomeTemplate } from './templates/HomeTemplate';
import { LoginTemplate } from './templates/LoginTemplate';
import DatVe from './pages/DatVe/DatVe';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}> 
    {/* ko xài BrowserRouter nữa 
      history : chuyển hướng trang 
    */}
    {/* <Header /> */}
     <Switch>
      {/* <Route exact path="/trangchu" render={(propsRoute)=> {
        //propsRoute : chứa các thuộc tính history, match, get params...
        // Trả về 1 component
        return <div>
          <Header />
          <TrangChu {...propsRoute} /> {/* Truyền các props của route vào component */}
        {/* </div> }}/> */}
      
      <HomeTemplate path="/trangchu" component={TrangChu} />

      {/* <Route exact path="/dangnhap" component={DangNhap}/> */}
      <LoginTemplate path="/dangnhap" component={DangNhap} />

      <Route exact path="/dangky" component={DangKy}/>
      {/* <Route exact path="/chitietphim/:maPhim" render={(propsRoute)=> {
        return <div>
          <Header />
          <ChiTietPhim {...propsRoute} />
        </div>
      }} /> */}
      <HomeTemplate path="/chitietphim/:maPhim" component={ChiTietPhim} />
      <Route exact path="/" component={TrangChu}/>
      <Route path="/datve" render={ (propsRoute) => {
        return <DatVe {...propsRoute} />
      }} />
    </Switch>

    </Router>
  );
}

export default App;
