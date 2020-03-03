import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const SET_TOKEN = "SET_TOKEN";
export const TOKEN_AQUIRED = "TOKEN_AQUIRED";
export const GET_USER = "GET_USER";
export const GET_STUFF = "GET_STUFF";

export const loginData = credential => dispatch => {
  dispatch({ type: SET_TOKEN });
  axiosWithAuth
    .post("/stuffs", credential)
    .then(res => {
      console.log(res);
      window.localStorage.setItem("token", res.data.payload);
      dispatch({ type: TOKEN_AQUIRED });
      this.props.history.push("/tech-list");
    })
    .catch(err => {
      console.error("You are getting an error of", err);
    });
};

export const getUser = () => dispatch => {
  dispatch({ type: GET_USER });
  axiosWithAuth
    .get("/users/:id/stuffs")
    .then(res => {
      console.log(res);
      dispatch({ type: GET_STUFF, payload: res.data });
    })
    .catch(err => {
      console.error("You are getting an error of", err);
    });
};
