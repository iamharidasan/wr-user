import axios from "axios"

import { GET_PROFILES, PROFILE_ERROR, SAVE_PROFILES, RESULTS } from "./types"

//Get all profile
export const getProfiles = () => async dispatch => {
  try {
    const profiles = localStorage.getItem("profiles")
    if (profiles) {
      const data = JSON.parse(profiles)
      dispatch({
        type: GET_PROFILES,
        payload: data
      })
    } else {
      const res = await axios.get("https://randomuser.me/api/0.8/?results=20")
      dispatch({
        type: GET_PROFILES,
        payload: res.data
      })
    }
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR
    })
  }
}

export const appendUser = (formData, history) => dispatch => {
  let user = {
    user: {
      gender: "",
      name: {
        title: "",
        first: "",
        last: ""
      },
      location: {
        street: "",
        city: "",
        state: "",
        zip: ""
      },
      email: "",
      username: "",
      password: "bianca",
      salt: "mKMp0Nwy",
      md5: "0bd68a72fc75e2ec87449c021b812d6e",
      sha1: "3b483f726c704b72f4df8e181533ba425bdb5149",
      sha256:
        "5007cf004b6388009b118e2b962f1c1076b796f7a806af60b5c5297831a51f21",
      registered: 1195361898,
      dob: "",
      phone: "",
      cell: "(228)-510-4066",
      picture: {
        large: "https://randomuser.me/api/portraits/women/7.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/7.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/7.jpg"
      }
    }
  }
  if (formData.title) {
    user.user.name.title = formData.title
  } else {
    user.user.name.title = ""
  }
  if (formData.first) {
    user.user.name.first = formData.first
  } else {
    user.user.name.first = ""
  }
  if (formData.last) {
    user.user.name.last = formData.last
  } else {
    user.user.name.last = ""
  }
  if (formData.street) {
    user.user.location.street = formData.street
  } else {
    user.user.location.street = ""
  }
  if (formData.city) {
    user.user.location.city = formData.city
  } else {
    user.user.location.city = ""
  }
  if (formData.state) {
    user.user.location.state = formData.state
  } else {
    user.user.location.state = ""
  }
  if (formData.zip) {
    user.user.location.zip = formData.zip
  } else {
    user.user.location.zip = ""
  }
  if (formData.email) {
    user.user.email = formData.email
  } else {
    user.user.email = ""
  }
  if (formData.username) {
    user.user.username = formData.username
  } else {
    user.user.username = ""
  }
  if (formData.dob) {
    user.user.dob = formData.dob
  } else {
    user.user.dob = ""
  }
  if (formData.phone) {
    user.user.phone = formData.phone
  } else {
    user.user.phone = ""
  }
  const alreadyData = localStorage.getItem("profiles")
  let jsonData = JSON.parse(alreadyData)
  jsonData.results.unshift(user)
  dispatch({
    type: SAVE_PROFILES,
    payload: jsonData
  })
  history.push("/")
}

export const filterJson = keyword => dispatch => {
  const profiles = localStorage.getItem("profiles")
  if (profiles) {
    const data = JSON.parse(profiles)
    let newData = data.results.filter(
      profile => profile.user.name.first === keyword
    )
    let ProperArr = {
      results: newData
    }
    console.log(newData)
    dispatch({
      type: RESULTS,
      payload: ProperArr
    })
  }
}
