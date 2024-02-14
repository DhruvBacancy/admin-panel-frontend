// import { AxiosRequestConfig } from 'axios';
import { axiosClient } from '../axiosCliesnt';

export async function userLogin(data) {
    return await axiosClient.post("admin/auth/login", data);
  }