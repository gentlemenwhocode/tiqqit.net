import React, {Component} from "react"
import { Redirect } from "react-router-dom"
import {Card, Modal, Button} from 'react-bootstrap'



class ShowTicket extends Component {
  constructor(props){
    super(props)
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    
    this.state = {
      ticket:[],
      success: false,
      editable: false, 
      show: false
    }
    this.getTicket()
  }

  componentDidMount(){
    this.getTicket()
  }

  getTicket = () => {
    const { id } = this.props.match.params
    fetch(`http://www.tiqqit.net/tickets/${id}`)
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
    fetch(`http://www.tiqqit.net/tickets/${id}`, {
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
      fetch(`http://www.tiqqit.net/tickets/${id}`,
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

    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
    
  render(){
    const { ticket, user, editable } = this.state
      return(
        <React.Fragment>
            {!editable && 
              <Card
              className="w-50 p-3"
              style={{width: "20rem", marginLeft: "auto",
              marginRight: "auto", alignItems: "center",
              justifyContent: "center"}}
              bg={'success'}
              text={'light'}
              >
            
              <Card.Header>TITLE: {ticket.title} </Card.Header>
              <Card.Body>
                <Card.Title> PRIORITY: {ticket.priority} </Card.Title>
                <Card.Text> CREATED BY: {ticket.user_email} </Card.Text>
                <Card.Text> PROJECT CATEGORY: {ticket.project_cat} </Card.Text>
                <Card.Text> PROBLEM CAT/TYPE: {ticket.prob_cat}</Card.Text>
                <Card.Text> DESCRIPTION: {ticket.desc}</Card.Text>
                <Card.Text> STATUS: {ticket.status}</Card.Text>
                <Card.Text> DUE DATE: {ticket.due_date}</Card.Text>
                <Card.Text> COMMENTS: {ticket.comments}</Card.Text>
                <Card.Text> CREATED ON: {ticket.created_at}</Card.Text>
                <Card.Text> LAST UPDATED: {ticket.updated_at}</Card.Text>
                
                {ticket.image_url &&
                <Button variant="primary" onClick={this.handleShow} style={{width: "20rem", marginLeft: "auto",
                marginRight: "auto", alignItems: "center",
                justifyContent: "center"}}>
                See Image
                </Button>}

                {!ticket.image_url &&
                <Button variant="primary" style={{width: "20rem", marginLeft: "auto",
                marginRight: "auto", alignItems: "center",
                justifyContent: "center"}} >
                No Image Attached
                </Button>}

                <Modal show={this.state.show} onHide={this.handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>TITLE: {ticket.title}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body><div>
                    <img className="img-fluid" src={ticket.image_url}></img></div></Modal.Body>
                </Modal>
              </Card.Body>
            </Card>
           } 
          
          {editable && 
              <Card
              bg={'warning'}
              text={'dark'}
              className="w-50 p-3"
              style={{width: "20rem", marginLeft: "auto",
                  marginRight: "auto", alignItems: "center",
                  justifyContent: "center"}}
              >
            
              <Card.Header>TITLE:
                  <input type='text'
                  ref={input => this.title = input}
                  defaultValue={ ticket.title }
                  /> 
                  </Card.Header>
              <Card.Body>
                <Card.Title>PRIORITY: 
                  <input type='text'
                  ref={input => this.priority = input}
                  defaultValue={ ticket.priority}/>
                  </Card.Title>
                <Card.Text> CREATED BY: {ticket.user_email} </Card.Text>
                <Card.Text> PROJECT CATEGORY: <input type='text'
                          ref={input => this.project_cat = input}
                          defaultValue={ ticket.project_cat}/>
                </Card.Text> 
                <Card.Text>PROBLEM CAT/TYPE: <input type='text'
                          ref={input => this.prob_cat = input}
                          defaultValue={ ticket.prob_cat}/>
                </Card.Text> 
                <Card.Text>DESCRIPTION: <input type='text'
                          ref={input => this.desc = input}
                          defaultValue={ ticket.desc} />
                </Card.Text> 
                <Card.Text> STATUS: <input type='text'
                          ref={input => this.status = input}
                          defaultValue={ ticket.status} />
                </Card.Text>
                <Card.Text> DUE DATE:<input type='text'
                          ref={input => this.due_date = input}
                          defaultValue={ ticket.due_date} />
                </Card.Text>
                <Card.Text> COMMENTS: {ticket.comments} </Card.Text>
                <Card.Text> CREATED ON: {ticket.created_at} </Card.Text>
                <Card.Text> LAST UPDATED: {ticket.updated_at} </Card.Text>
              </Card.Body>
            </Card>
           } 
         
         <br></br>
         <div className="buttons" style={{marginLeft: "auto",
              marginRight: "auto", display: "flex", alignItems: "center",
              justifyContent: "space-evenly ", maxWidth: "50%"}}>
            <Button variant="warning"
              onClick={() => this.handleEdit(`${ ticket.id }`)}
            >
              {(this.state.editable == `${ ticket.id }`)? 'Submit' : 'Edit'}
            </Button>

            <Button variant="danger"
              onClick={() => this.handleDelete(`${ ticket.id }`)}
            >
            Delete</Button>

            <Button variant="light"
              onClick={() => window.history.back()}>
              Back
            </Button>
        </div>
        { this.state.success && <Redirect to="/ticketindex"/>}
    
        </React.Fragment>
      );
  }
} 
export default ShowTicket