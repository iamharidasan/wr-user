import React, { useState } from "react"
import PropTypes from "prop-types"
import { Container, Row, Col } from "react-bootstrap"
import { connect } from "react-redux"
import { loginUser } from "../../actions/auth"
import Homepage from "../homepage/Homepage"

const Login = ({ loginusername, loginUser }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    loginUser(username, password)
  }

  const { username, password } = formData
  if (loginusername === null) {
    return (
      <section className="login-box">
        <Container className="position-relative h-100">
          <Row className="h-100 position-relative">
            <Col xs={12} lg={{ span: 6, offset: 3 }}>
              <h1 className="title text-center">
                White Rabbit - User Management
              </h1>
              <p className="text-center">Please login to Continue</p>
              <form action="" method="post" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="form-control"
                    placeholder="Please enter the username"
                    onChange={e => onChange(e)}
                    value={username}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="Please enter the Password"
                    onChange={e => onChange(e)}
                    value={password}
                  />
                </div>
                <div className="text-center">
                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-primary"
                  />
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    )
  } else {
    return <Homepage />
  }
}

Login.propTypes = {
  loginusername: PropTypes.string,
  loginUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  loginusername: state.auth.username
})

export default connect(mapStateToProps, { loginUser })(Login)
