import React from "react"
import Background from "./header-background.png"

class Header extends React.Component {

  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route,
      edit_user_route,
      current_user
    } = this.props

    return (
      <React.Fragment>
        <div class="jumbotron" style={{backgroundImage: `url(${Background})`, backgroundSize: "contain"}}>
          <h1 class="display-3">Welcome to TIQQIT.net</h1>
          <p class="lead">This is a lead text</p>
          {current_user &&
            <p>Welcome, { current_user.name }</p>
          }
        </div>

        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/apartmentindex">Apartments</a>
              </li>
              {!logged_in &&
                <li>
                  <a class="nav-link" href={sign_in_route}>Sign In</a>
                </li>}
              {!logged_in &&
                <li>
                  <a class="nav-link" href="/users/sign_up">Sign Up</a>
                </li>}
              {logged_in &&
                <li>
                  <a class="nav-link" href="/mylistings">My Listings</a>
                </li>}
              {logged_in &&
                <li>
                  <a class="nav-link" href="/newform">New Apartment</a>
                </li>}
              {logged_in &&
                <li>
                <a class="nav-link" href={edit_user_route}>Edit Your Account</a>
                </li>}
              {logged_in &&
                <li>
                  <a class="nav-link" href={sign_out_route}>Sign Out</a>
                </li>}
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header