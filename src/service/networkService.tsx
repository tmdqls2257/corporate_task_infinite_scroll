import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  RawAxiosRequestHeaders,
} from "axios";

interface ICustomAxios {
  get: (headers: RawAxiosRequestHeaders) => Promise<AxiosRequestConfig>;
}
class CustomAxios implements ICustomAxios {
  private static instance: CustomAxios;
  private baseURL: string;
  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async get(headers: RawAxiosRequestHeaders) {
    try {
      const res = await axios.get(this.baseURL, {
        headers,
      });
      this.isError(res);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  isError(res: AxiosResponse<any, any>) {
    if (res.status > 299 || res.status < 200) {
      const message: string =
        res.data && res.data.message
          ? res.data.message
          : "Something went wrong";
      const error = new Error(message);
      if (res.status === 401) {
        throw error;
      }
    }
  }

  public static getInstance(baseURL: string): CustomAxios {
    if (!CustomAxios.instance) {
      CustomAxios.instance = new CustomAxios(baseURL);
    }
    return CustomAxios.instance;
  }
}

const NetworkService = CustomAxios.getInstance(
  `${process.env.REACT_APP_SERVER}`
);

export default NetworkService;
