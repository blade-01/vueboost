import axios from 'axios';
import router from '../router';
import { useMainStore } from './main';
import { useToast } from 'vue-toastification';

const toast = useToast();

export const http = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL
});

http.interceptors.request.use(
  (config) => {
    const { toggleLoader } = useMainStore();
    toggleLoader(true);
    const token = sessionStorage.getItem('learnly_token');
    config.headers!['Authorization'] = `Bearer ${token}`;
    if (config.method === 'delete') {
      toggleLoader(false);
    }
    return config;
  },
  (error) => {
    const { toggleLoader } = useMainStore();
    toggleLoader(false);

    return Promise.reject(error);
  }
);
http.interceptors.response.use(
  (response) => {
    const { toggleLoader } = useMainStore();
    toggleLoader(false);
    if (
      response.status === 401 ||
      response.data.message === '401 Unauthorized'
    ) {
      toast.error("Oops! You're not authorized");
    }
    return response;
  },
  (error) => {
    const { toggleLoader, toggleError } = useMainStore();
    toggleLoader(false);
    toggleError(true);
    setTimeout(() => {
      toggleError(false);
    }, 2000);
    return Promise.reject(error);
  }
);

export const push = (name: string): void => {
  router.push({ name: name });
};

export const go = (value: number): void => {
  setTimeout(() => {
    router.go(value);
  }, 2000);
};
