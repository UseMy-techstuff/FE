import { axiosWithAuth } from "../../utils/axiosWithAuth";
import history from '../../utils/history';

export const SET_TOKEN = "SET_TOKEN";
export const TOKEN_AQUIRED = "TOKEN_AQUIRED";
export const GET_USER = "GET_USER";
export const USER_STUFF = "USER_STUFF";
export const SET_ERROR = "SET_ERROR";
export const NEW_USER = 'NEW_USER';
export const GET_STUFF = 'GET_STUFF';
export const ALL_STUFF = 'ALL_STUFF';

export const loginData = credential => dispatch => {
  dispatch({ type: SET_TOKEN });
  axiosWithAuth()
    .post("/users/login", credential)
    .then(res => {
      console.log(res);
      window.localStorage.setItem("token", res.data.token);
      dispatch({ type: TOKEN_AQUIRED });
      history.push(`/user-page/${res.data.id}`);
    })
    .catch(err => {
      console.error("You are getting an error of", err);
    });
};

export const registerUser = newUser => dispatch => {
  dispatch({ type: NEW_USER });
  axiosWithAuth()
    .post("/users/register", newUser)
    .then(res => {
      console.log(res);
      history.push("/");
    })
    .catch(err => {
      console.error("You are getting an error of", err);
    });
};

export const getUser = (id) => dispatch => {
  dispatch({ type: GET_USER });
  axiosWithAuth()
    .get(`/users/${id}/stuffs`)
    .then(res => {
      console.log(res);
      dispatch({ type: USER_STUFF, payload: res.data });
    })
    .catch(err => {
      console.error("You are getting an error of", err);
      dispatch({ type: SET_ERROR, payload: "error fetching data from API!" });
    });
};

export const getTech = () => dispatch => {
  dispatch({type: GET_STUFF})
  axiosWithAuth()
  .get("/stuffs")
  .then(res => {
    console.log('api data',res.data)
    dispatch({ type: ALL_STUFF, payload: res.data });
  })
  .catch(err => {
    console.error("You are getting an error of", err);
    dispatch({ type: SET_ERROR, payload: "error fetching data from API!" });
  })
}