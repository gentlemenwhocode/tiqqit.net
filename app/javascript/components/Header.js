import React from "react"
import "../stylesheets/application.scss"
import logo from "../stylesheets/img/Tiqqit Bug.png"

import {Jumbotron, Navbar, Nav} from 'react-bootstrap'


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
        <Jumbotron>
            <h1>Welcome to Tiqqit.net</h1>
            <p>
              See your tickets below:
            </p>
        </Jumbotron>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/"><img
                src={logo}
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
                ></img>
                </Nav.Link> 
              {logged_in && <Nav.Link href="/ticketindex">
                <p>All Tickets</p>
              </Nav.Link>}

              {logged_in &&<Nav.Link href="/mytickets">
                <p>My Tickets</p>
              </Nav.Link>}

              {logged_in && <Nav.Link href="/newticket">
                <p >Create A New Ticket</p>
              </Nav.Link>}

              {!logged_in && <Nav.Link href={sign_in_route}>
                <p>Sign In</p>
              </Nav.Link>}

              {!logged_in && <Nav.Link href="/users/sign_up">
                <p>Sign Up</p>
              </Nav.Link>}

              {logged_in && <Nav.Link href={sign_out_route}>
                <p>Sign Out</p>
              </Nav.Link>}

              </Nav>
            </Navbar.Collapse>
          </Navbar>
      </React.Fragment>
    );
  }
}

export default Header