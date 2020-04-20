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
                    <Card style={{marginLeft:"65px", marginTop:"50px", maxWidth:"400px"}} key={ index }>
                        <CardHeader> Oof, thats a 404! </CardHeader>
                        <CardImg style={{maxWidth: "400px"}} src={ data.images.downsized_large.url } alt="404 error gif"/>
                        <CardBody>
                            <CardText> Looks like you tried to go somewhere that doesnt exist!</CardText>
                            <CardText><Link to="/"> Go back to the home page</Link></CardText>
                        </CardBody>
                    </Card>
                )
              }
            )}
        </React.Fragment>
        )}
    }
}

export default NotFoundPage

