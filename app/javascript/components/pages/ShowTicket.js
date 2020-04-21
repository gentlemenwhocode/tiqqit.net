import React, {Component} from "react"
import { Redirect } from "react-router-dom"
import {Card, Modal, Button} from 'react-bootstrap'



class ShowTicket extends Component {
  constructor(props){
    super(props)

    // For a given function, creates a bound function that has the same body as the original function. The this object of the bound function is associated with the specified object, and has the specified initial parameters.

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    
    // state is set to empty array of tickets upon initialization
    // success is allowing handleDelete and handleUpdate to work
    // editable is allowing handleEdit toggle to work 
    // show is allowing Modal functionality to work

    this.state = {
      ticket:[],
      success: false,
      editable: false, 
      show: false
    }
    this.getTicket()
  }

  // Called immediately after a component is mounted. Setting state here will trigger re-rendering.

  componentDidMount(){
    this.getTicket()
  }

  // fetches single tickets by id

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

  // allows single ticket to be edited by id

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

  // allows a single ticket to be deleted by id

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

    // allows single ticket to be updated by id

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

    // allows toggle feature for Modal

    handleClose() {
      this.setState({ show: false });
    }

    // allows toggle feature for Modal

    handleShow() {
      this.setState({ show: true });
    }

    // allows input date form field to be populated upon initialization

    defaultDate = () => {
      document.getElementById('datePicker').value = new Date().toDateInputValue();
    }
    
  render(){
    const { ticket, user, editable } = this.state
      return(
        <React.Fragment>
          <br></br>

            {/* if editable is false simply renders information without ability to edit */}

            {!editable && 
              <Card
              className="w-50 p-3"
              style={{width: "20rem", marginLeft: "auto",
              marginRight: "auto", alignItems: "center",
              justifyContent: "center", boxShadow: "1px 2px 4px rgba(0, 0, 0, .6)"}}
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

                {/* toggle functionality for image button based on if image is uploaded to database or not */}

                {ticket.image_url &&
                <Button variant="primary" onClick={this.handleShow} style={{marginLeft: "auto",
                marginRight: "auto", display: "flex", alignItems: "center",
                justifyContent: "center", maxWidth: "50%"}}>
                See Image
                </Button>}

                {!ticket.image_url &&
                <Button variant="primary" style={{marginLeft: "auto",
                marginRight: "auto", display: "flex", alignItems: "center",
                justifyContent: "center", maxWidth: "50%"}} >
                No Image Attached
                </Button>}

                {/* if image is present new window will pop up to show image */}

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

          {/* if editable is true allows for ability to edit form */}

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
                  <select type='text'
                  ref={select => this.priority = select}
                  defaultValue={ ticket.priority }>
                    <option value=""> </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  
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
                <Card.Text> DUE DATE:

                  {/* id of datePicker allows for defaultDate method to execute */}

                  <input type='datetime-local'
                          ref={input => this.due_date = input}
                          defaultValue={
                           ticket.due_date}
                           id="datePicker"
                           name="due_date"
                           min="2020-04-17T00:00"
                           max="2025-12-31T00:00"
                          />
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

        {/* if form is fille out correctly page is redirected to My Tickets with newly updated ticket at bottom of screen */}
        
        { this.state.success && <Redirect to="/ticketindex"/>}
    
        </React.Fragment>
      );
  }
} 
export default ShowTicket