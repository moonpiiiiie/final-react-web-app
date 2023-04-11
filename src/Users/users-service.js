import axios from "axios";
const USERS_API_URL = "http://localhost:4000/api/users";

const api = axios.create({
    withCredentials: true,
});

export const findAllUsers = async () => {
    const response = await axios.get(USERS_API_URL);
    return response.data;
};

export const findUserById = (id) => {
    return axios.get(`${USERS_API_URL}/${id}`).then((response) => response.data);
};

export const createUser = (user) => {
    return axios.post(USERS_API_URL, user);
};

export const updateUser = (newUser) => {
    return axios.put(`${USERS_API_URL}/${newUser.id}`, newUser);
};

export const deleteUser = (id) => {
    return axios.delete(`${USERS_API_URL}/${id}`);
};

export const login = (user) => {
    // only for single user login
    // return axios.post(`${USERS_API_URL}/login`, user);

    // for multi user login, use api to identify the current user
    return api.post(`${USERS_API_URL}/login`, user);
};

export const logout = () => {
    // only for single user login
    // return axios.post(`${USERS_API_URL}/logout`);

    // for multi user login, use api to identify the current user
    return api.post(`${USERS_API_URL}/logout`);
};

export const register = (user) => {
    // only for single user login
    // return axios.post(`${USERS_API_URL}/register`, user);

    // for multi user login, use api to identify the current user
    return api.post(`${USERS_API_URL}/register`, user);
};

export const profile = () => {
    // only for single user login
    // return axios.get(`${USERS_API_URL}/profile`);

    // for multi user login, use api to identify the current user
    return axios.get(`${USERS_API_URL}/profile`);
};