import { LOAD_USER, REGISTER_USER, LOGIN_USER, FAIL_USER, LOGOUT_USER, CURRENT_USER, GET_AUTH_USER, AUTH_FAIL } from "../constants/users"
import axios from "axios"

export const registerUser = (user, history) => async dispatch => {
    dispatch({ type: LOAD_USER })
    try {
        const response = await axios.post("/user/register", user)
        dispatch({ type: REGISTER_USER, payload: response.data.user })
        history.push("/login")
    } catch (error) {
        console.dir(error.response.data)
        const { errors, msg } = error.response.data
        if (msg) { alert(msg) }
        if (Array.isArray(errors)) {
            errors.forEach(err => {
                alert(err.msg)
            })
        }
        dispatch({ type: FAIL_USER, payload: error.response.data })
    }
}

export const loginUser = (userAuth, history) => async dispatch => {
    dispatch({ type: LOAD_USER })
    try {
        const response = await axios.post("/user/login", userAuth)
        console.log("response", response)
        dispatch({ type: LOGIN_USER, payload: response.data })
        history.push("/dashboard")
    } catch (error) {

        const { errors, msg } = error.response.data
        if (msg) { alert(msg) }
        if (Array.isArray(errors)) {
            errors.forEach(err => {
                alert(err.msg)
            })
        }
        dispatch({ type: FAIL_USER, payload: error.response.data })
    }
}

export const currentUser = () => async dispatch => {
    dispatch({ type: LOAD_USER })
    try {
        const opts = {
            headers:
                { Authorization: localStorage.getItem("token") }
        }
        const response = await axios.get("/user/current", opts)
        dispatch({ type: CURRENT_USER, payload: response.data.user })

    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data })
    }
}

export const logout = () => {
    return { type: LOGOUT_USER }
}
//messengerrr
export const getAuthUser = ()  => async dispatch => {
    dispatch({type:LOAD_USER})
 
  try {
 
   const config = {
       headers: {
       authorization: localStorage.getItem("token"),
       "content-type": "application/json"
        
       },
     };
     const response = await axios.get("/profil", config);
  console.log("response",response)
     dispatch({
       type: GET_AUTH_USER,
       payload:response.data,
     })
     
   } catch (error) {
     dispatch({
       type: AUTH_FAIL,
     
     });
   }
   
  }   