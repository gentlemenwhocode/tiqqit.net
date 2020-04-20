import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {Image} from 'react-bootstrap'
class NotFoundPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            gifs: [],
            isLoaded: false
        }
        this.getGifs()
    }

        componentDidMount() {
            this.getGifs()
        }


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
        var { isLoaded, gifs } = this.state;
        
        if(!isLoaded) {
            return <div> LOADING...</div>
        } else {
            console.log(this.state.gifs)


        return (
        <React.Fragment>
       
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

