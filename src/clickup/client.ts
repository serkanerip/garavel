import axios, {AxiosError, AxiosRequestConfig} from 'axios';

const clickupClient = axios.create({
    baseURL: 'https://api.clickup.com/api/v2/',
    headers: {
        "Content-Type": "application/json",
    },
});

clickupClient.interceptors.request.use((config: AxiosRequestConfig) => {
    config.headers['Authorization'] = `${process.env.CLICKUP_TOKEN}`;
    return config;
}, (error: AxiosError) => Promise.reject(error));

export default clickupClient;