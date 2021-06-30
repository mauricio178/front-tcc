import axios from 'axios';
import { verifyPermission } from '../utils/profileUtils';

export const api = axios.create({
 //baseURL: "http://localhost:3333/"
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

  return config;
}, function (error) {  
  return Promise.reject(error);
});