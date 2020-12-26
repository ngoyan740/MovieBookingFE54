import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import moment from 'moment'
// import styles from './chiTietPhim.module.scss'

export default function ChiTietPhim(props) {
    //Props: lấy dữ liệu ra. props.match.params: props này là props của thẻ Route truyền cho component


    //Tạo 1 state chứa thông tin chi tiết phim giá trị ban đầu là object rỗng
    const [chiTietPhim, setChiTietPhim] = useState({});

    // Dùng useEffect để tự động gọi api chi tiết phim khi trang load ra
    useEffect(async () => {

        const maPhim = props.match.params.maPhim;

        //lấy đc maPhim : gửi lên api backend để lấy dữ liệu phim về và gán vào state chi tiết phim

        const result = await Axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
            method: 'GET'
        });
        console.log(result.data);
        setChiTietPhim(result.data);

        //set title
        document.title = result.data.tenPhim;


    }, []) //tham số thứ 2 là mảng rỗng, chỉ muốn nó chay 1 lần load ra trang này



    return (
        <div className="container">
            <div className="row  mt-4">
                <div className="col-4">
                    <img src={chiTietPhim.hinhAnh} alt={chiTietPhim.hinhAnh} style={{ width: '200px', height: '300px' }} />
                </div>
                <div className="col-8 text-white rounded" style={{ backgroundColor: '#f7f7f9' }}>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>Tên phim</td>
                                <td>{chiTietPhim.tenPhim}</td>
                            </tr>
                            <tr>
                                <td>Mô tả</td>
                                <td>{chiTietPhim.moTa}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
            <hr className="border-light mt-4" />
            <div className="row mt-5">
                <div className="col-12 text-center text-white">
                    <h3>Thông tin lịch chiếu</h3>
                </div>
            </div>
            <div className="row text-white">
                <div className="nav flex-column nav-pills col-4" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {

                        const activeClass = index === 0 ? 'active' : '';
                        
                        return <a className={`nav-link ${activeClass}`} id={`v-pills-${heThongRap.maHeThongRap}-tab`} data-toggle="pill" href={`#v-pills-${heThongRap.maHeThongRap}`} role="tab" aria-controls={`v-pills-${heThongRap.maHeThongRap}`} aria-selected="true" key={index}>
                            <img className="mr-2" src={heThongRap.logo} width="50" height="50" alt={heThongRap.logo}/>
                            {heThongRap.tenHeThongRap}</a>
                    })}
                    {/* <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
                        <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
                        <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>
                        <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a> */}
                </div>
                <div className="tab-content col-8 text-white" id="v-pills-tabContent">
                    {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
                        const activeClass = index === 0 ? 'active' : '';

                        return <div key={index} className={`tab-pane ${activeClass}`} id={`v-pills-${heThongRap.maHeThongRap}`} role="tabpanel" aria-labelledby={`v-pills-${heThongRap.maHeThongRap}`}>
                            {/* {heThongRap.tenHeThongRap} */}
                            {heThongRap.cumRapChieu?.map((cumRap,index) =>{
                                return <div key={index} className="mt-3">
                                    <h3 className="text-warning">{cumRap.tenCumRap}</h3> 
                                    <hr style={{border:'solid 0.1px #e1e1e1d0'}}/>
                                    <div className="row">
                                        {cumRap.lichChieuPhim?.slice(0,12).map((lichChieu,index) => {
                                            return <div key={index} className="col-3">
                                                {moment(lichChieu.ngayChieuGioChieu).format('hh:mmA')}
                                            </div>
                                        })}
                                    </div>
                                </div>
                            })}
                        </div>
                    })}
                    {/* <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">Home</div>
                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">Profile</div>
                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">Message</div>
                    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">Setting</div> */}
                </div>
            </div>
        </div>
    )
}
