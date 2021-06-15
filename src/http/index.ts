import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";

export class Http {
  private axios: AxiosInstance;

  private useInterceptors() {
    this.axios.interceptors.request.use(
      this.requestInterceptors,
      this.handleRequestError
    );
    this.axios.interceptors.response.use(
      this.handleResponseSuccess,
      this.handleResponseFaild
    );
  }

  private requestInterceptors(config: AxiosRequestConfig): AxiosRequestConfig {
    // Do Something...
    // For Example: config header
    return config;
  }

  private handleRequestError(error: any): any {
    console.log(error);
    return error;
  }

  private handleResponseSuccess(res: AxiosResponse): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      const { errcode, errmsg } = res.data;
      if (errcode !== "0000" && errmsg) reject(res.data);
      resolve(res.data);
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
      headers: { "X-Requested-With": "XMLHttpRequest" },
    });
    this.useInterceptors();
  }

  public get(url: string, params = {}, config = {}): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      this.axios
        .get(url, { params, ...config })
        .then((res) => {
          // Do Something...
          // For Example: appointment a custom error-code
          resolve(res);
        })
        .catch((error: AxiosError) => {
          reject(error);
        });
    });
  }

  public post(url: string, params = {}, config = {}): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      this.axios
        .post(url, { ...params }, { ...config })
        .then((res) => {
          // Do Something...
          // For Example: appointment a custom error-code
          resolve(res);
        })
        .catch((error: AxiosError) => {
          reject(error);
        });
    });
  }
}

export default new Http();
