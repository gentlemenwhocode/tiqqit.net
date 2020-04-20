import React from "react"
import "../stylesheets/application.scss"
import logo from "../stylesheets/img/Tiqqit Bug.png"

import {Navbar, Nav} from 'react-bootstrap'


class Header extends React.Component {

  render () {

    // RAILS props passed into React App

    const {
      logged_in,
      sign_in_route,
      sign_out_route,

    } = this.props

    return (
      <React.Fragment>
        
        {/* Navar component imported from React Bootstrap with styling */}

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

                {/* based on sign in status Navbar will change to reflect user interface options for that user */}

              {logged_in && <Nav.Link href="/ticketindex" >
                <p style={{marginTop: "1rem"}}>All Tickets</p>
              </Nav.Link>}

              {logged_in &&<Nav.Link href="/mytickets" >
                <p style={{marginTop: "1rem"}}>My Tickets</p>
              </Nav.Link>}

              {logged_in && <Nav.Link href="/newticket" >
                <p style={{marginTop: "1rem"}}>Create A New Ticket</p>
              </Nav.Link>}

              {!logged_in && <Nav.Link href={sign_in_route} >
                <p style={{marginTop: "1rem"}}>Sign In</p>
              </Nav.Link>}

              {!logged_in && <Nav.Link href="/users/sign_up">
                <p style={{marginTop: "1rem"}}>Sign Up</p>
              </Nav.Link>}

              {logged_in && <Nav.Link href={sign_out_route}>
                <p style={{marginTop: "1rem"}}>Sign Out</p>
              </Nav.Link>}

              </Nav>
            </Navbar.Collapse>
          </Navbar>
      </React.Fragment>
    );
  }
}

export default Header