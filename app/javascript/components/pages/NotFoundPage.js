import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {Image} from 'react-bootstrap'

class NotFoundPage extends React.Component {
    constructor(props){
        super(props)
        // fetch request uploads the gifs state which is set to an empty array at initialization
        this.state = {
            gifs: [],
            isLoaded: false
        }
        this.getGifs()
    }
        // Called immediately after a component is mounted. Setting state here will trigger re-rendering.
        componentDidMount() {
            this.getGifs()
        }

    // fetch request to giphy API
    getGifs = () => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=fail&api_key=zpIByyzSBrKBLfSgwgwdfzqhYRoqluQn&limit=1`)
       .then((response)=>{
           if(response.status === 200) {
               return(response.json())
           }
       })
       .then((gifsArray)=> {
           this.setState({
               isLoaded: true,
               gifs: gifsArray.data
           })
            })
  }

    render(){
        // deconstructing state to use in render
        var { isLoaded, gifs } = this.state;
        
        // logic to render a gif if request invalid will return LOADING... otherwise will return gif from API
        if(!isLoaded) {
            return <div> LOADING...</div>
        } else {

        return (
        <React.Fragment>
            {/* this maps through giphy payload and renders gif */}
            { this.state.gifs.map((data, index) => {
                return (
                    <div key={ index }>
                        <Image src={ data.images.downsized_large.url }/>
                    </div>
                )
              }
            )}

            <h1> Oh, no! A 404! Write a tiqqit about it! </h1>
            <Link to="/"> Go back to the home page</Link>
        </React.Fragment>
        )}
    }
}

export default NotFoundPage

