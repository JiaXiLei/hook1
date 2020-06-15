import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
//redux-promise和redux-thunk 原来分解axios请求的data数据
import promise from 'redux-promise'
import thunk from 'redux-thunk'
// import { persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { home, login } from '@/reducer'  //引用reducer文件夹里的主index.js


//固定格式 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    combineReducers({ login, home }),
    composeEnhancers(applyMiddleware(promise, thunk))
)

window.store = store  //可以存储在window ，在任何页面都能获取

export { store }  //导出store 在主index.js页面引用