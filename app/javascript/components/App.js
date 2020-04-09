import React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Header from "./Header"

import TicketIndex from "./pages/TicketIndex"
import NewTicket from "./pages/NewTicket"
import ShowTicket from "./pages/ShowTicket"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      tickets: [],
      // myTickets:[]
    }
    this.getTickets()
  }

  componentDidMount(){
    this.getTickets()
  }

  getTickets = () => {
    fetch("http://localhost:3000/tickets")
    .then((response)=>{
      if(response.status === 200) {
        return(response.json())
      }
    })
    .then((ticketsArray) =>{
      console.log(ticketsArray)
      this.setState({
        tickets: ticketsArray.tickets
      })
    })
  }

  createTicket = (newTicket) => {
    return fetch("http://localhost:3000/tickets", {
    	body: JSON.stringify(newTicket),
    	headers: {
    		"Content-Type": "application/json"
    	},
    	method: "POST"
    })
    .then((response) => {
      if(response.ok){
        return this.getTickets()
      }
    })
  }

  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props

    return (
      <React.Fragment>
        <Header
        logged_in = { logged_in }
        sign_in_route = { sign_in_route }
        sign_out_route = { sign_out_route }
      />
        
        <Router>
        <Switch>
          <Route
            exact path="/ticketindex/"
            render={ (props) => <TicketIndex tickets={ this.state.tickets } /> } />
            <Route
            exact path="/newticket/"
            render={ (props) => <NewTicket handleSubmit={ this.createTicket} /> } />
        </Switch>
      </Router>
        
      </React.Fragment>
    );
  }
}

export default App