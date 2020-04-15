import React from "react"


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
        <div className="jumbotron">
          <h1 className="display-3"> LOGO GO HERE Welcome to TIQQIT.net</h1>
          <p className="lead">This is a lead text</p>
        </div>

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
              {logged_in &&
              <li className="nav-item">
                <a className="nav-link" href="/ticketindex">All Tickets</a>
              </li>}
              {!logged_in &&
                <li>
                  <a className="nav-link" href={sign_in_route}>Sign In</a>
                </li>}
              {!logged_in &&
                <li>
                  <a className="nav-link" href="/users/sign_up">Sign Up</a>
                </li>}
              {logged_in &&
                <li>
                  <a className="nav-link" href="/mytickets">My Tickets</a>
                </li>}
              {logged_in &&
                <li>
                  <a className="nav-link" href="/newticket">Create A New Ticket</a>
                </li>}
              {logged_in &&
                <li>
                  <a className="nav-link" href={sign_out_route}>Sign Out</a>
                </li>}
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header