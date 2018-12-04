import { createStore, applyMiddleware } from 'redux';
// 引入所有的reducer
import reducer from './../reducer';

const initialState = {
    menuName: '打开alert',
    alert: {
        status: 0,
        text:'',
        category:'',
        canChange: 1
    },
    showHeader: true,
    showProfile: false,
    scrollTop:{
        
    }
}

// redux 中间件
const thunk = store => next => action => {
    console.log('wtf the fuck1');
    typeof action === 'function' ?
    action(store.dispatch, store.getState) :
    next(action)
}

const thunk1 = store => next => action => {
    console.log('wtf the fuck2');
    typeof action === 'function' ?
    action(store.dispatch, store.getState) :
    next(action)
}
 
// 按顺序执行中间件
const configureStore = () => (applyMiddleware(thunk, thunk1)(createStore)(reducer, initialState));

export default configureStore;