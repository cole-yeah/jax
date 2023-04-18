import axios from 'axios';
import { timeout } from './config';

export const request = axios.create({
  timeout: timeout,
  withCredentials: true,
});



// 处理响应体
// request.interceptors.response.use(
  // SuccessStatusCodeInterceptor,
  // FailStatusCodeInterceptor,
// );