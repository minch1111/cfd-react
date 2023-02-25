import api from "../config/api"
import { apiServices } from "./callApi"

const pagesServices ={
    faq(){
        return apiServices.callApi(`${api}/faq`) 
    }
}

export default pagesServices