import React from "react"

const Address = ({ data }) => {
  const capitalize = s => {
    if (typeof s !== "string") return ""
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
  const { street, city, state, zip } = data
  return (
    <span>{`${capitalize(street)}, ${capitalize(city)}, ${capitalize(
      state
    )}, ${zip}`}</span>
  )
}

export default Address
