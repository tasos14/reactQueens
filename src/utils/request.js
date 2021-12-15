import axios from 'axios';

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

export default function request(url, type, data) {
    return axios({
        method: type,
        url,
        data,
    }).then(checkStatus);
}
