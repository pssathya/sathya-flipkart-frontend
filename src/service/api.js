import axios from 'axios';

const url = 'https://sathya-flipkart-backend.herokuapp.com';

export const authenticateLogin = async (user) => {
    try {
        return await axios.post(`${url}/api/auth/login`, user)
    } catch (error) {
        console.log('error while calling login API: ', error);
        return error.response;
    }
}

export const authenticateSignup = async (user) => {
    try {
        return await axios.post(`${url}/api/auth/signup`, user)
    } catch (error) {
        console.log('error while calling Signup API: ', error);
        return error.response;
    }
}

export const authenticatedUserInfo = async () => {
    try {
        let token = sessionStorage.getItem('ltk');
        return await axios.get(`${url}/api/auth/userInfo`, {
            headers: {
                'x-access-token': token
            }
        });
    } catch (error) {
        console.log('error while calling UserInfo API: ', error);
        return error.response;
    }
}

export const getProductById = async (id) => {
    try {
        return await axios.get(`${url}/product/${id}`);
    } catch (error) {
        console.log('Error while getting product by id response', error);
        return error.response;
    }
}

export const payUsingPaytm = async (data) => {
    try {
        let response = await axios.post(`${url}/payment`, data);
        return response.data;
    } catch (error) {
        console.log('error', error);
        return error.response;
    }
}