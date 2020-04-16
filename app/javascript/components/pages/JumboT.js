import React from "react"
import "../../stylesheets/application.scss"

import {Jumbotron} from 'react-bootstrap'


class JumboT extends React.Component {

  render () {

    return (
      <React.Fragment>
        <Jumbotron>
            <h1>Welcome to Tiqqit.net</h1>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default JumboT