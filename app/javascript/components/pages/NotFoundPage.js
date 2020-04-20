import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import {
    Card, CardHeader, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

class NotFoundPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            gifs: null,
            isLoaded: false
        }
        this.getGifs()
    }
    //React lifecyle check, if the component mounted, run the get.Gifs method. 
        componentDidMount() {
            this.getGifs()
        }

    //This will do a fetch request to the Giphy API, if the response is OK it will then setstate of Gif's to a json object with the key of data.
    getGifs = () => {
        fetch(`https://api.giphy.com/v1/gifs/random?api_key=zpIByyzSBrKBLfSgwgwdfzqhYRoqluQn&tag=fail&rating=PG-13`)
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
    // This lil bad-boy right here checks to see if the state has been set by the fetch call has changed the state yet. if not, show a loading bar. If not, go ahead and render the rest of the page.
    render(){
        var { isLoaded, gifs } = this.state;
        
        if(!isLoaded) {
            return <div> LOADING...</div>
        } else {
        return (
        <React.Fragment>
                    <Card style={{marginLeft:"65px", marginTop:"50px", maxWidth:"400px"}}>
                        <CardHeader> Oof, thats a 404! </CardHeader>
                        <CardImg style={{maxWidth: "400px"}} src={ this.state.gifs.images.downsized_large.url } alt="404 error gif"/>
                        <CardBody>
                            <CardText> Looks like you tried to go somewhere that doesnt exist!</CardText>
                            <CardText><Link to="/"> Go back to the home page</Link></CardText>
                        </CardBody>
                    </Card>
                
        </React.Fragment>
        )}
    }
}

export default NotFoundPage

