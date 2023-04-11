import axios  from 'axios'

//  const BASICURL ="http://192.168.29.231:5000"
 const BASICURL ="http://192.168.255.27:5000"
 
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