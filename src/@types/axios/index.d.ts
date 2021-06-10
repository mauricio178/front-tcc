import axios from 'axios'

interface CustomAxiosRequestConfig{  
  profile?: {
    name: string;
    description: string;
    permissions:{
      name: string;
      description: string;
    }[] 
  }
}

declare module 'axios' {
  export interface AxiosRequestConfig extends CustomAxiosRequestConfig{}
}