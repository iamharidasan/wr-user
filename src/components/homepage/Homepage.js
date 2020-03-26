import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Container, Row, Col } from "react-bootstrap"
import Spinner from "../Spinner"
import { getProfiles, filterJson } from "../../actions/profile"
import Moment from "react-moment"
import Address from "./Address"
import { Link } from "react-router-dom"

const Homepage = ({ getProfiles, loading, profiles, filterJson }) => {
  useEffect(() => {
    getProfiles()
  }, [getProfiles])
  const capitalize = s => {
    if (typeof s !== "string") return ""
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
  if (loading) {
    return <Spinner />
  } else {
    return (
      <section className="logged-in">
        <Container>
          <Row>
            <Col xs={12} lg={12}>
              <h1 className="text-center">List of Users</h1>
              <input
                type="text"
                className="form-control mb-2"
                onChange={e => filterJson(e.target.value)}
                placeholder="Search with any keyword from first name"
              />
              <div className="table-responsive">
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Name</th>
                      <th>Location</th>
                      <th>Email</th>
                      <th>Username</th>
                      <th>DOB</th>
                      <th>Phone</th>
                    </tr>
                  </thead>
                  <tbody>
                    {profiles &&
                      profiles.map((user, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            {capitalize(user.user.name.title)}
                            {". "}
                            {capitalize(user.user.name.first)}{" "}
                            {capitalize(user.user.name.last)}
                          </td>
                          <td>
                            <Address data={user.user.location} />
                          </td>
                          <td>{user.user.email}</td>
                          <td>{user.user.username}</td>
                          <td>
                            <Moment format="DD/MM/YYYY">{user.user.dob}</Moment>
                          </td>
                          <td>
                            <a href={`tel:${user.user.phone}`}>
                              <i className="fas fa-phone-square"></i>
                            </a>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <Link to="add-user" className="btn btn-primary">
                Add New User
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

Homepage.propTypes = {
  profiles: PropTypes.array,
  getProfiles: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  filterJson: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  profiles: state.profile.profiles,
  loading: state.profile.loading
})

export default connect(mapStateToProps, { getProfiles, filterJson })(Homepage)
