import React, { useState } from 'react'
import { Link } from 'react-router-dom'

class NotFoundPage extends React.Component {

    render(){
        return (
        <React.Fragment>
            <h1> Oh, no! A 404!</h1>
            <Link to="/"> Go back to the home page, you dummy</Link>
        </React.Fragment>
        )}
}

export default NotFoundPage

