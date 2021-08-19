import { Dictionary } from '@/@types/basic';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

import { ElMessage as message } from 'element-plus';

interface _ResponeseData {
  data: Dictionary;
  errcode: string;
  errmsg: string;
}

export class Http {
  private axios: AxiosInstance;

  private useInterceptors() {
    this.axios.interceptors.request.use(this.requestInterceptors, this.handleRequestError);
    this.axios.interceptors.response.use(this.handleResponseSuccess, this.handleResponseFaild);
  }

  private requestInterceptors(config: AxiosRequestConfig): AxiosRequestConfig {
    // Do Something...
    // For Example: config header
    return config;
  }

  private handleRequestError(error: any): any {
    message({ message: '请求失败！', type: 'error' });
    return error;
  }

  private handleResponseSuccess(res: AxiosResponse): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      const { errcode, errmsg } = res.data as _ResponeseData;
      if (errcode !== '0000') {
        message({ message: errmsg || '请求失败！', type: 'error' });
        reject(res);
        return;
      }
      message({ message: '请求成功！', type: 'success' });
      resolve(res);
    });
  }

  private handleResponseFaild(error: AxiosError): Promise<AxiosError> {
    if (error && error.response) {
      const { status } = error.response;
      switch (status) {
        // Do Something...
        // For Example: given a tip
        default:
          break;
      }
    }
    return Promise.reject(error);
  }

  constructor() {
    this.axios = axios.create({
      timeout: 20000,
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
    });
    this.useInterceptors();
  }

  public get(url: string, params = {}, config = {}): Promise<_ResponeseData> {
    return new Promise((resolve, reject) => {
      this.axios
        .get(url, { params, ...config })
        .then((res) => {
          resolve(res.data);
        })
        .catch((error: AxiosError) => {
          reject(error);
        });
    });
  }

  public post(url: string, params = {}, config = {}): Promise<_ResponeseData> {
    return new Promise((resolve, reject) => {
      this.axios
        .post(url, { ...params }, { ...config })
        .then((res) => {
          resolve(res.data);
        })
        .catch((error: AxiosError) => {
          reject(error);
        });
    });
  }
}

export default new Http();
