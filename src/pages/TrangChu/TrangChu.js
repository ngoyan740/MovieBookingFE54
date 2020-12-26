import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import { getDataFilmAction } from '../../redux/actions/QuanLyPhimActions';
import { NavLink } from 'react-router-dom';

export default function TrangChu(props) {


    //useSelector là hook react dùng để lấy state từ store về KHÔNG BIẾN THÀNH PROPS và ko dùng mapStateToProps

    const mangPhim = useSelector(state => state.QuanLyPhimReducer.mangPhim);
    const dispatch = useDispatch();
    console.log('MangPhim', mangPhim);
    const loadDataPhim = async () => {
        dispatch(getDataFilmAction())
    }
    useEffect(() => {

        //Chạy 1 lần duy nhất sau khi giao diện render
        dispatch(getDataFilmAction())
        //Vừa vào trang sẽ load danh sách phim

    }, [])
    
    // console.log('Props Mang Phim', props.mangPhim);

    // const loadDataPhim = async() => {

    //     // props.dispatch({
    //     //     type: 'GET_DATA_FILM',
    //     //     dataFilm: result.data
    //     // })

    //     props.dispatch(getDataFilmAction())
    //     // Maintain code dễ hơn, chỉ handle action chi tiết được gọi trong folder actions
    // }


    //useEffect thay thế cho các lifecycle (didMount, didUpdate, didUnmount)
    

    const renderPhim = () => {
        return mangPhim.map((phim, index) => {
            return <div className="col-4 mb-2">
                <div className="card text-left">
                    <img className="card-img-top" src={phim.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{phim.tenPhim}</h4>
                        <p className="card-text">{phim.moTa}</p>
                        <NavLink className="btn btn-warning" to={`/chitietphim/${phim.maPhim}`}>Mua vé</NavLink>
                    </div>
                </div>

            </div>
        })
    }

    return (
        <div className="container">
            <button onClick={() => {
                loadDataPhim();
            }}>Load Danh Sách Phim</button>
            <div className="row mt-2">
                {renderPhim()}
            </div>
        </div>
    )
}


// //Kết nối với Reducer để lấy dữ liệu mảng phim về => tạo ra được props.mangPhim
// const mapStateToProps = (state) => {
//     //trả về 1 state

//     return {
//         mangPhim: state.QuanLyPhimReducer.mangPhim
//     }
// }

// export default connect(mapStateToProps) (TrangChu)