import axios from 'axios';
import { verifyPermission } from '../utils/profileUtils';

export const api = axios.create({
 // baseURL: "http://localhost:3333/"
    baseURL: "https://projeto-gp.herokuapp.com/"
});

api.interceptors.request.use(function (config) {
  // Do something before request is sent
  const { profile, url, method } = config 
  
  const PERMITED = verifyPermission({
    permissions: profile?.permissions, 
    url: String(url), 
    method: String(method)
  })

  console.log({PERMITED})

  // if(!PERMITED) throw new Error("OPERATION NOT PERMITTED!");
  

  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});