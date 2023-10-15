import axios from "axios"

// creating a common structure for all api requests

export const commonRequests= async (method,url,body)=>{

let config={
    method,
    url,
    data:body
}
return axios(config).then(response=>{
    console.log(response);
return response
}).catch(err=>{
    console.log(err);
    return err
})

}