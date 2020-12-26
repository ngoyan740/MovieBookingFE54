import {applyMiddleware, combineReducers, createStore} from 'redux';
import {QuanLyPhimReducer} from './reducers/QuanLyPhimReducer'
import reduxThunk from 'redux-thunk';


const rootReducer = combineReducers({
    // Nơi định nghĩa các reducer trong hệ thống

    QuanLyPhimReducer
    
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
//applyMiddleware : cài đặt redux thunk