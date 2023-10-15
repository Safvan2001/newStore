import { BASE_URL } from "./base_url"
import { commonRequests } from "./commonRequest"

// add
export const addApi= async (body)=>{
return await commonRequests("POST",`${BASE_URL}/product/addproduct`,body)
}