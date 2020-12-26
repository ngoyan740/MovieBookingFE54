// File chứa các hàm action

import Axios from 'axios'
import {GET_DATA_FILM} from '../const/QuanLyPhimConst'
import {DOMAIN} from '../../util/settings'

export const getDataFilmAction = () => {
// GỌI HÀM NÀY TRẢ VỀ 1 OBJECT


    // Gọi ajax
    // Searching for Middleware redux thunk // hoặc redux saga
    // Gọi function chứa 1 function dispatch
    return async(dispatch) => {
        const result = await Axios({
            url: `${DOMAIN}/api/quanlyphim/laydanhsachphim?manhom=GP01`,
            method: 'GET'
        })

        //Sau khi có data => dùng hàm middleware reduxthunk (dispatch) để đưa dữ liêu lên reducer
        dispatch({
            type: GET_DATA_FILM,
            dataFilm: result.data
        })
    }

  


}