import axios from 'axios';

export const setAuthToken = token => {
    if (token){
        axios.default.headers.common['Authorization'] = token;
    }else{
        delete axios.defaults.headers.common['Authorization'];
    }
};