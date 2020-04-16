import React, {Component} from "react"
import { Redirect } from "react-router-dom"
import {Card} from 'react-bootstrap'


class ShowTicket extends Component {
  constructor(props){
    super(props)
    this.state = {
      ticket:[],
      success: false,
      editable: false
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
        ticket: ticketInfo
      })
    })
 
  }

  handleEdit = (id) => {
    if(this.state.editable == id){
      this.setState({ editable: null })
      let title = this.title.value
      let project_cat = this.project_cat.value
      let prob_cat = this.prob_cat.value
      let priority = this.priority.value
      let desc = this.desc.value
      let status = this.status.value
      let due_date = this.due_date.value
      let ticket = { title: title, project_cat: project_cat, prob_cat: prob_cat, priority: priority, desc: desc, status: status, due_date: due_date}
      this.handleUpdate(ticket, id)
    }else{
   this.setState({
     editable: id
   })}
  }

  handleDelete = (id) => {
    fetch(`http://localhost:3000/tickets/${id}`, {
      method: 'DELETE',
       headers: {
         'Content-Type': 'application/json'
         }
       }

     ).then((response) => {
       if(response.ok){
         alert("This ticket has been deleted!")
         this.setState({ success: true })
         return this.props.getTickets()
       }
     })
    }

    handleUpdate = (ticket, id) => {
      fetch(`http://localhost:3000/tickets/${id}`,
      {
        method: 'PUT',
        body: JSON.stringify({ticket: ticket}),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
          this.setState({ success: true })
          return this.props.getTickets()
        })
    }

  
  

  render(){
    const { ticket, user, editable } = this.state
      return(
        <React.Fragment>
            {!editable && 
              <Card
              bg={'success'}
              text={'light'}
              style={{ width: '18rem' }}>
            
              <Card.Header>TITLE: {ticket.title} </Card.Header>
              <Card.Body>
                <Card.Title> PRIORITY: {ticket.priority} </Card.Title>
                <Card.Text>
                <div> CREATED BY: {ticket.user_email} </div>
                <div> PROJECT CATEGORY: {ticket.project_cat} </div>
                <div> PROBLEM CAT/TYPE: {ticket.prob_cat} </div>
                <div> DESCRIPTION: {ticket.desc} </div>
                <div> STATUS: {ticket.status} </div>
                <div> DUE DATE: {ticket.due_date} </div>
                <div> COMMENTS: {ticket.comments} </div>
                <div> CREATED ON: {ticket.created_at} </div>
                <div> LAST UPDATED: {ticket.updated_at} </div>
                <div><img href={ticket.image_url} target="_blank" className="upload-image" src={ticket.image_url}></img></div>
                </Card.Text>
              </Card.Body>
            </Card>
           } 
          
          {editable && 
              <Card
              bg={'warning'}
              text={'dark'}
              style={{ width: '18rem' }}>
            
              <Card.Header>TITLE:
                  <input type='text'
                  ref={input => this.title = input}
                  defaultValue={ ticket.title }/> 
                  </Card.Header>
              <Card.Body>
                <Card.Title>PRIORITY: 
                  <input type='text'
                  ref={input => this.priority = input}
                  defaultValue={ ticket.priority}/>
                  </Card.Title>
                <Card.Text>
                <div> CREATED BY: {ticket.user_email} </div>
                <div> PROJECT CATEGORY: <input type='text'
                          ref={input => this.project_cat = input}
                          defaultValue={ ticket.project_cat}/>
                </div> 
                <div>PROBLEM CAT/TYPE: <input type='text'
                          ref={input => this.prob_cat = input}
                          defaultValue={ ticket.prob_cat}/>
                </div> 
                <div> DESCRIPTION: <input type='text'
                          ref={input => this.desc = input}
                          defaultValue={ ticket.desc} />
                </div> 
                <div> STATUS: <input type='text'
                          ref={input => this.status = input}
                          defaultValue={ ticket.status} />
                </div>
                <div> DUE DATE:<input type='text'
                          ref={input => this.due_date = input}
                          defaultValue={ ticket.due_date} />
                </div>
                <div> COMMENTS: {ticket.comments} </div>
                <div> CREATED ON: {ticket.created_at} </div>
                <div> LAST UPDATED: {ticket.updated_at} </div>
                </Card.Text>
              </Card.Body>
            </Card>
           } 
         
        <button type="button" className="btn btn-info btn-sm"
          onClick={() => this.handleEdit(`${ ticket.id }`)}
          style={{margin:"0 0.5em"}}>
          {(this.state.editable == `${ ticket.id }`)? 'Submit' : 'Edit'}
          
        </button>

        <button type="button" className="btn btn-danger btn-sm"
          onClick={() => this.handleDelete(`${ ticket.id }`)}
          style={{margin:"0 0.5em"}}>
          Delete</button>

        <button type="button" className="btn btn-outline-primary"
          style={{margin:"1rem 9.5rem"}}
          onClick={() => window.history.back()}>
          Back
        </button>

        { this.state.success && <Redirect to="/ticketindex"/>}
    
        </React.Fragment>
      );
  }
} 
export default ShowTicket