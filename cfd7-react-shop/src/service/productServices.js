import api from '../config/api'
import { apiServices } from '../core'
import callApi from './callApi'

const productServices = {
    productList(){
        return apiServices.callApi(`${api}/product`)
    },
    category(){
        return apiServices.callApi(`${api}/categories`)
    },
    getDetail(slug){
        return apiServices.callApi(`${api}/product/${slug}`)
    }
}

export default productServices