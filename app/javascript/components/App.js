import React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Header from "./Header"
import "../stylesheets/application.scss"

import TicketIndex from "./pages/TicketIndex"
import NewTicket from "./pages/NewTicket"
import ShowTicket from "./pages/ShowTicket"
import TicketEdit from "./pages/TicketEdit"
import TicketImage from "./pages/TicketImage"
import JumboT  from "./pages/JumboT"
import NotFoundPage from "./pages/NotFoundPage"

class App extends React.Component {
  constructor() {
    super()

    // sets state to empty array upon initialization, once fetch called fills empty array with tickets

    this.state = {
      tickets: [],
    }
    this.getTickets()
  }

  // Called immediately after a component is mounted. Setting state here will trigger re-rendering.

  componentDidMount(){
    this.getTickets()
  }

  // fetches all tickets 
  
  getTickets = () => {
    fetch("http://localhost:3000/tickets")
    .then((response)=>{
      if(response.status === 200) {
        return(response.json())
      }
    })
    .then((ticketsArray) =>{
      this.setState({
        tickets: ticketsArray.tickets
      })
    })
  }

  // fetches POST request method that stores information for newly created ticket

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

    // RAILS props from devise

    const {
      logged_in,
      sign_in_route,
      sign_out_route,
      current_user
    } = this.props

    return (
      <React.Fragment>
        
        <Header
        logged_in = { logged_in }
        sign_in_route = { sign_in_route }
        sign_out_route = { sign_out_route }
        current_user = { current_user }
    
      />
        
        <Router>
          {/* Router that passes down props to child components and redirects */}
        <Switch>
            <Route
            exact path="/"
            component= { JumboT } />
            <Route
            exact path="/ticketindex/"
            render={ (props) => <TicketIndex {...props} tickets={ this.state.tickets } /> } />
            <Route
            exact path="/ticketindex/:id"
            render={ (props) => <ShowTicket {...props}
            tickets={ this.state.tickets }
            getTickets={ this.getTickets }
            /> } />
            <Route
            exact path="/newticket/"
            render={ (props) => <NewTicket {...props} handleSubmit={ this.createTicket} /> } />

            <Route
            exact path="/mytickets/"
            render={ (props) => <TicketEdit
            {...props}
            tickets={ this.state.tickets }
            getTickets={ this.getTickets }
            /> } />
            
            <Route
            exact path="/ticketimage/:id"
            render={ (props) => <TicketImage
            {...props}
            tickets={ this.state.tickets }
            /> } />

          <Route path="*" component={NotFoundPage} />

        </Switch>
      </Router>
        
      </React.Fragment>
    );
  }
}

export default App