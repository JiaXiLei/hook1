import api from './api'
import { getAxios, postAxios } from '@/utils/request'

export const homeGetDataAxios = () => getAxios(api.homeGetData)  //默认获取数据
export const homeDeleteDataAxios = option => postAxios(api.homeDeleteData, option) //删除
export const homeUpDataAxios = option => postAxios(api.homeUpData, option) //修改
export const homeAddDataAxios = option => postAxios(api.homeAddData, option)  //添加
