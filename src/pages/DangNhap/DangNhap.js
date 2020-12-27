import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { dangNhapAction } from '../../redux/actions/QuanLyNguoiDungActions';

export default function DangNhap(props) {
    //useDispatch là hook do react redux cung cấp tương tự props.dispatch khi sử dụng connect (ko cần tạo ra biến dispatch...)

     const dispatch = useDispatch();

        // useState là thư viện thay thế this.state trong RE class component
        
        const [state, setState] = useState({
            //useState nhận giá trị đầu vào là stateDefault
            //Ứng với classComponent state = {taiKhoan:'', matKhau:''}

            taiKhoan: '',
            matKhau: ''
        })
        console.log('state', state);

        const handleChangeInput = (event) => {
            //Lấy ra value từ thể input đăng nhập
                const{name,value} = event.target;
                console.log(name,value);

                //Đối với reactClassComoponent
                /* this.setState({
                    [name]: value
                })
                */
               const newState = {...state, [name]: value}

                setState(newState) // Giữ lại giá trị cũ đồng thời cập nhật thuộc tính mơi

                // hoặc setState({...state, [name]:value})
                // setState({
                //     [name]:value -> load 1 thuộc tính khi user nhập vào, ko hay
                // })

             
        }

        const handleSubmit = (e) => {
            e.preventDefault(); // cản sự kiển submit của browser (reload page)
            //Gọi api để xác thực đăng nhập : dùng hook hoặc connect
                // dispatch(gửi action)
                dispatch(dangNhapAction(state));

                //Chuyển hướng trang vầ trang chủ
                //push: chuyển hướng trang có thể backpage lại được
                // repalce: chuyển hướng trang hiện tại bàng trnag khác
                // props.history.push('/trangchu');
                // sai đúng về vị trí cũ
        }

    return (
        <form className="container mt-4" onSubmit={handleSubmit}>
            <h3 className="text-center">ĐĂNG NHẬP</h3>
            <div className="form-group">
                <p>Tài Khoản</p>
                <input className="form-control" name="taiKhoan" onChange={handleChangeInput} />
            </div>
            <div className="form-group">
                <p>Mật Khẩu</p>
                <input className="form-control" name="matKhau" onChange={handleChangeInput} type="password"/>
            </div>
            <div className="form-group">
                <button className="btn btn-success" type="submit">Đăng Nhập</button>
            </div>
        </form>
    )
}
