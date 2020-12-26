import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'


//NavLink : là thay thế thẻ a trong react-router-dom -> chuyển trang mà không load lại trang chủ
// <NavLink className="nav-link" to="/trangchu">

export default function Header() {
    return (
        <div className="border-bottom-0 border-light">
            <nav className="navbar navbar-expand-sm navbar-dark" style={{ backgroundColor: '#343a3f' }}>
                <a className="navbar-brand text-white mr-4" href="/trangchu"><img src="../img/movie.png" width="50" height="50"/></a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink activeStyle={{color: '#ffc007'}} className="nav-link" to="/trangchu">Trang Chủ</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={{color: '#ffc007'}} className="nav-link" to="/dangky">Đăng Ký</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={{color: '#ffc007'}} className="nav-link" to="/dangnhap">Đăng Nhập</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <a activeClassName="bg-white rounded text-dark" className="dropdown-item" to="#">Action 1</a>
                                <a activeClassName="bg-white rounded text-dark" className="dropdown-item" to="#">Action 2</a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-warning my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>

    )
}
