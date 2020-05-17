import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:4000'
});

const httpUtil = {
    get: (url, params = {}) => {
        return new Promise((resolve, reject) => {
            instance.get(url, { params })
                .then((data) => {
                    if(data.error === 0) {
                        resolve(data.data);
                    } else {
                        resolve(data);
                    }
            }).catch((error) => {
                reject({ error: JSON.stringify(error) })
            })
        })
    },
    post: (url, params = {}) => {
        return new Promise((resolve, reject) => {
            instance.post(url, params)
                .then((data) => {
                    resolve(data);
                }).catch((error) => {
                    reject({ error: JSON.stringify(error) })
                })
        })
    }
}
export default httpUtil;
