import axios  from 'axios'

 const BASICURL = "http://192.168.29.23:5000"
 export const axiosApi = axios.create({
    baseURL:BASICURL,
    withCredentials:true,
 })
 axiosApi.interceptors.request.use(function(config){
    const token = localStorage.getItem("token");
    if(token){
        config.headers['Authorization']='Bearer '+token;
    }else{
        console.log("error");
    }
    return config;
 })