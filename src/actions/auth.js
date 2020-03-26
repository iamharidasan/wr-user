import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, AUTH_ERROR } from "./types"

import loginJson from "../components/data/index.json"

//Login User
export const loginUser = (username, password) => async dispatch => {
  try {
    const storedUsername = loginJson.username
    const storedPassword = loginJson.password
    if (storedUsername === username && storedPassword === password) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: username
      })
    } else {
      dispatch({
        type: LOGIN_FAIL
      })
    }
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    })
  }
}

// Logout
export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT
  })
}
