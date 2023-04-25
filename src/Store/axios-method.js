import axios  from 'axios'

 export const BASICURL ="http://192.168.1.43:5000"
 
 export const axiosApi = axios.create({
    baseURL:BASICURL,
    withCredentials:true,
 })
 axiosApi.interceptors.request.use(function(config){
    const token = sessionStorage.getItem("token");
    if(token){
        config.headers['Authorization']='Bearer '+token;
    }else{
        console.log("error");
    }
    return config;
 })