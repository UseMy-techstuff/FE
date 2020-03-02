import axios from 'axios';

export const axiosWithAuth = () => {
    const token = window.localStorage.getItem('item');
    return axios.create({
      headers: {
        authorization: token
      },
      baseURL: "https://use-my-stuff.herokuapp.com/api"
    });
}