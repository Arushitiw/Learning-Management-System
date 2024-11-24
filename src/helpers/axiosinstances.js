const base_url = "http://localhost:5014/api/v1";
const axiosInstance = axios.create();
axiosInstance.defaults.baseURL = base_url; // Correct property name
axiosInstance.defaults.withCredentials = true;

export default axiosInstance;