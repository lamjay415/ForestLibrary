import axios from 'axios';

export const getLeaves = () => {
    return axios.get('/api/leaves');
};

// export const getUserLeaves = id => {
//     return axios.get(`/api/leaves/user/${id}`);
// };

export const addALeaf = leaf => {
    return axios.post('/api/leaves', leaf);
};