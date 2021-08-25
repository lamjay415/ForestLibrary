import axios from 'axios';

export const getLeaves = () => {
    return axios.get('/api/leaves');
};

// export const getUserLeaves = id => {
//     return axios.get(`/api/leaves/user/${id}`);
// };

export const getLeaf = id => {
    return axios.get(`/api/leaves/${id}`);
}

export const addALeaf = leaf => {
    return axios.post('/api/leaves', leaf);
};

export const updateLeaf = leaf => {
    return axios.patch(`/api/leaves/${leaf._id}`, leaf);
}