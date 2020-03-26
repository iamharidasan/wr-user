import React, { useState } from "react"
import PropTypes from "prop-types"
import { Container, Row, Col } from "react-bootstrap"
import { connect } from "react-redux"
import { appendUser } from "../../actions/profile"

import { withRouter } from "react-router-dom"

const AddUser = ({ appendUser, history }) => {
  const [formData, setFormData] = useState({
    title: "",
    first: "",
    last: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    username: "",
    dob: "",
    phone: ""
  })

  const {
    title,
    first,
    last,
    street,
    city,
    state,
    zip,
    email,
    username,
    dob,
    phone
  } = formData

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })
  return (
    <Container>
      <Row>
        <Col>
          <h1>Add New User</h1>
          <form
            action=""
            method="post"
            onSubmit={e => {
              e.preventDefault()
              appendUser(formData, history)
            }}
          >
            <div className="form-group">
              <label htmlFor="title">First Name</label>
              <select
                name="title"
                id="title"
                className="form-control"
                value={title}
                onChange={e => onChange(e)}
              >
                <option value="mr">mr</option>
                <option value="ms">ms</option>
                <option value="mrs">mrs</option>
                <option value="miss">miss</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                name="first"
                id="firstname"
                className="form-control"
                placeholder="First Name"
                value={first}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                name="last"
                id="lastname"
                className="form-control"
                placeholder="Last Name"
                value={last}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="First Name"
                value={email}
                onChange={e => onChange(e)}
              />
            </div>
            <h3>Location:</h3>
            <div className="form-group">
              <label htmlFor="street">Street</label>
              <input
                type="text"
                name="street"
                id="street"
                className="form-control"
                placeholder="Street"
                value={street}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                id="city"
                className="form-control"
                placeholder="City"
                value={city}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                type="text"
                name="state"
                id="state"
                className="form-control"
                placeholder="State"
                value={state}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="zip">Zip</label>
              <input
                type="text"
                name="zip"
                id="zip"
                className="form-control"
                placeholder="Zip"
                value={zip}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                className="form-control"
                placeholder="Username"
                value={username}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dob">DOB</label>
              <input
                type="date"
                name="dob"
                id="dob"
                className="form-control"
                placeholder="DOB"
                value={dob}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="form-control"
                placeholder="Phone"
                value={phone}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="text-center">
              <input
                type="submit"
                value="Add User"
                className="btn btn-primary"
              />
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  )
}

AddUser.propTypes = {
  appendUser: PropTypes.func.isRequired
}

export default connect(null, { appendUser })(withRouter(AddUser))
