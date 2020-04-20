import React from "react"
import "../../stylesheets/application.scss"
import tiqqit_word from "../../stylesheets/img/tiqqit_word.png"

import {Jumbotron, Image} from 'react-bootstrap'


class JumboT extends React.Component {

  render () {

    return (
      // Jumbotron is called here which contains our logo image
      <React.Fragment>
        <Jumbotron className="jumbotron-1">
            {/* Call image component with fluid property so that image fills container  */}
            <Image className="jumbotron-1-img"src={tiqqit_word} fluid /> 
            <br></br>
            <br></br>
            <p className="jumbotron-p">Tiqqit was designed to help teams of all types manage work flow and bugs during software development. Tiqqit can be used by any programmer, for any project, at any time. Sign up now! </p>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default JumboT