import React, {Component} from "react"


class ShowTicket extends Component {
  constructor(props){
    super(props)
    this.state = {
      ticket:[],
      user:[]
    }
    this.getTicket()
  }

  componentDidMount(){
    this.getTicket()
  }

  getTicket = () => {
    const { id } = this.props.match.params
    fetch(`http://localhost:3000/tickets/${id}`)
    .then((response) => {
      if(response.status === 200) {
        return(response.json())
      }
    })
    .then((ticketInfo) => {
      this.setState({
        ticket: ticketInfo.ticket,
        user: ticketInfo.user
      })
    })
    console.log(this.state.ticket)  
  }

  render(){
    const { ticket, user } = this.state
      return(
        <React.Fragment>
        <div>TITLE: {ticket.title} </div>
        <div> CREATED BY: {user.email} </div>
        <div> PROJECT CATEGORY: {ticket.project_cat} </div> 
        <div>PROBLEM CAT/TYPE: {ticket.prob_cat} </div> 
        <div> PRIORITY: {ticket.priority} </div> 
        <div> DESCRIPTION: { ticket.desc }</div> 
        <div> STATUS: {ticket.status} </div>
        <div> DUE DATE: {ticket.due_date} </div>
        <div> IMAGE: {ticket.image} </div>
        <div> COMMENTS: {ticket.comments} </div>
        <div> CREATED ON: {ticket.created_at} </div>
        <div> LAST UPDATED: {ticket.updated_at} </div> 



        <button type="button" className="btn btn-outline-primary"
          style={{margin:"1rem 9.5rem"}}
          onClick={() => window.history.back()}>
          Back
        </button>
        </React.Fragment>
      );
  }
} 
export default ShowTicket