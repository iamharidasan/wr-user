import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, AUTH_ERROR } from "../actions/types"

const initialState = {
  username: localStorage.getItem("username"),
  isAuthenticated: null,
  loading: true,
  user: null
}

export default function(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("username", payload)
      return {
        ...state,
        username: payload,
        isAuthenticated: true,
        loading: false
      }

    case LOGIN_FAIL:
    case LOGOUT:
    case AUTH_ERROR:
      localStorage.removeItem("username")
      return {
        ...state,
        username: null,
        isAuthenticated: false,
        loading: false
      }

    default:
      return state
  }
}
