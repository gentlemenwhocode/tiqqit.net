import React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


import TicketIndex from "./pages/TicketIndex"
import NewTicket from "./NewTicket"
import ShowTicket from "./ShowTicket"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      tickets: [],
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
      this.setState({
        tickets: ticketsArray.tickets
      })
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
        <Router>
        <Switch>
          <Route
            exact path="/ticketindex/"
            render={ (props) => <TicketIndex tickets={ this.state.tickets } /> } />
        </Switch>
      </Router>

        {logged_in &&
          <div>
            <a href={sign_out_route}>Sign Out</a>
          </div>
        }
        {!logged_in &&
          <div>
            <a href={sign_in_route}>Sign In</a>
          </div>
        }
      </React.Fragment>
    );
  }
}

export default App