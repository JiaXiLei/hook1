import {
    homeGetDataAxios,
    homeDeleteDataAxios,
    homeUpDataAxios,
    homeAddDataAxios,
} from '@/services/home'

// action
export function homeGetData() {  //获取数据
    return {
        type: 'HOME_GET_DATA',
        payload: homeGetDataAxios()
    }
}
export function homeDeleteData(option) {  //删除
    console.log(option)
    return {
        type: 'HOME_DELETE_DATA',
        payload: homeDeleteDataAxios({ id: option })
    }
}
export function homeAddData(option) {  //添加
    console.log(option)
    return {
        type: 'HOME_ADD_DATA',
        payload: homeAddDataAxios(option)
    }
}
export function homeUpData(option) {  //修改
    console.log(option)
    return {
        type: 'HOME_UP_DATA',
        payload: homeUpDataAxios(option)
    }
}
