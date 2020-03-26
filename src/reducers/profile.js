import {
  GET_PROFILES,
  PROFILE_ERROR,
  SAVE_PROFILES,
  RESULTS
} from "../actions/types"
const initialState = {
  profiles: [],
  loading: true
}

export default function(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case GET_PROFILES:
      if (localStorage.getItem("profiles") === null) {
        localStorage.setItem("profiles", JSON.stringify(payload))
      }
      return {
        ...state,
        profiles: payload.results,
        loading: false
      }

    case SAVE_PROFILES:
      localStorage.setItem("profiles", JSON.stringify(payload))
      return { ...state, loading: false, profiles: payload.results }

    case RESULTS:
      return { ...state, loading: false, profiles: payload.results }

    case PROFILE_ERROR:
      return { ...state, loading: false, profiles: null }

    default:
      return state
  }
}
