import React from "react"
import "../../stylesheets/application.scss"
import tiqqit_word from "../../stylesheets/img/tiqqit_word.png"

import {Jumbotron, Image} from 'react-bootstrap'


class JumboT extends React.Component {

  render () {

    return (
      <React.Fragment>
        <Jumbotron className="jumbotron-1">
            <Image className="jumbotron-1-img"src={tiqqit_word} fluid /> 
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default JumboT