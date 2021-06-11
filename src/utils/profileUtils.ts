import { AxiosRequestConfig } from "axios";

interface IPermissionDTO{
  name: string;
  description: string;
}

interface IVerifyDTO{
  permissions?: IPermissionDTO[];
  url: string; 
  method: string
}

export function verifyPermission({ permissions, url, method }: IVerifyDTO){

  let resource = ""
  
  if(url.includes('users')) return true

  if(!permissions) return false;

  if(url === 'team' && method === 'get')resource = 'LIST_TEAM';

  return !!permissions.find((permission) => permission.name === resource)
}