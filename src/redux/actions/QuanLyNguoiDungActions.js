import Axios from 'axios'
import { DOMAIN, USER_LOGIN, ACCESS_TOKEN } from '../../util/settings'


//nguoiDung = {taiKhoan: '', matKhau: ''}
export const dangNhapAction = (nguoiDung) => {

    return async (dispatch) => {

        //     try{
        //   const result = await Axios({
        //         url:`${DOMAIN}/api/quanlynguoidung/dangnhap`,
        //         method: 'POST',
        //         data: nguoiDung
        //     });

        //     console.log('NguoiDung', result.data);

        // }} catch (err){console.log(err.response?.data)}
        try {
            const result = await Axios({
                url: `${DOMAIN}/api/quanlynguoidung/dangnhap`,
                method: 'POST',
                data: nguoiDung
            });

            //Đăng nhập
            console.log('NguoiDung', result.data);

            // Lấy token lưu vào localStorage
            localStorage.setItem(ACCESS_TOKEN, result.data.accessToken);
            localStorage.setItem(USER_LOGIN, JSON.stringify(result.data));

        } catch (err) {
            console.log(err.response?.data);
        }
    }
}
        //    const promise = Axios({
        //             url:`${DOMAIN}/api/quanlynguoidung/dangnhap`,
        //              method: 'POST',
        //              data: nguoiDung
        //    })
        //    promise.then(result =>{
        //        console.log(result.data);
        //    })
        //    promise.catch(err => {
        //        console.log(err.response?.data);
    