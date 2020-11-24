// Wouter Wouters
const baseURLCloud = window && window._env_
    ? window._env_.REACT_APP_CLOUD_URL
    : "http://localhost:8080";


export default class ApiService {

    constructor(baseURL) {
        this.api = axios.create({
            baseURL,
            headers: {
                "Content-Type": "application/json"
            }
        });
        this.apiCloud = axios.create({
            baseURL: baseURLCloud,
            headers: {
                "Content-Type": "application/json"
            }
        });

    }
    async get(url, config) {
        try {
            const result = awai
            Wouter Wouters10: 30
            async get(url, config) {
                try {
                    const result = await this.api.get(url, config);
                    return result;
                } catch (error) {
                    handleError(error);
                }
            }

            async post(url, data, config) {
                try {
                    console.log(data);
                    const result = await this.api.post(url, data, config);
                    return result;
                } catch (error) {
                    handleError(error);
                }
            }