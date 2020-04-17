import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
        console.log(this.state.gifs)
        if(!isLoaded) {
            return <div> LOADING...</div>
        } else {
        return (
        <React.Fragment>
            <h1> Oh, no! A 404! Maybe you should write a tiqqit about it! </h1>
            <Link to="/"> Go back to the home page, you dummy</Link>
        </React.Fragment>
        )}
    }
}

export default NotFoundPage

