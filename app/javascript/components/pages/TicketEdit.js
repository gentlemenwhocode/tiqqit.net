import React, { Component } from 'react'
import { Redirect } from "react-router-dom"
import ActiveStorageProvider from 'react-activestorage-provider'

class TicketEdit extends Component {
    constructor(props){
        super(props)
        const id = parseInt(props.match.params.id)
        const ticket = props.tickets.find(ticket => ticket.id === id )
        this.state={
          ticket,
          success: false,
          editable: null
        }
      }

      //Ticket photo upload handleSubmit

      handleSubmit = (ticket)=>{
        this.setState({ ticket })
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


        handleEdit = (id) => {
            if(this.state.editable == id){
              this.setState({ editable: null })
              let title = this.title.value
              let project_cat = this.project_cat.value
              let prob_cat = this.prob_cat.value
              let priority = this.priority.value
              let description = this.desc.value
              let status = this.status.value
              let due_date = this.due_date.value
              let image = this.image.value
              let ticket = { title: title, project_cat: project_cat, prob_cat: prob_cat, priority: priority, description: description, status: status, due_date: due_date, image: image}
              this.handleUpdate(ticket, id)
            }else{
           this.setState({
             editable: id
           })}
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


          render () {
            const{ ticket } = this.state
            return (
              <React.Fragment>

                {ticket &&
                  <div>
                    <h1>Ticket Title: {ticket.title} </h1>
                    {ticket && ticket.image_url &&
                    <div>
                      <h2>The Image is: </h2>
                      <img src={ticket.image_url} />
                    </div>
                    }
                  <ActiveStorageProvider
                    endpoint={{
                      path: `/tickets/${ticket.id}`,
                      host: 'localhost:3000',
                      protocol: 'http',
                      model: 'Ticket',
                      attribute: 'image',
                      method: 'PUT',
                    }}
                    onSubmit={this.handleSubmit}
                    render={({ handleUpload, uploads, ready}) => (
                      <div>
                        <input
                          type="file"
                          disabled={!ready}
                          onChange={e => handleUpload(e.currentTarget.files)}
                        />

                        {uploads.map(upload => {
                          switch (upload.state) {
                            case 'waiting':
                              return <p key={upload.id}>Waiting to upload {upload.file.name}</p>
                            case 'uploading':
                              return (
                                <p key={upload.id}>
                                  Uploading {upload.file.name}: {upload.progress}%
                                </p>
                              )
                            case 'error':
                              return (
                                <p key={upload.id}>
                                  Error uploading {upload.file.name}: {upload.error}
                                </p>
                              )  
                            case 'finished':
                              return (
                                <p key={upload.id}>Finished uploading {upload.file.name}</p>
                              )
                          }
                        })}
                    </div>
                    )}
                    />
                  </div>
                }

                <table className="table table-hover">
                  <thead>
                    <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Project Category</th>
                    <th scope="col">Type</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Description</th>
                    <th scope="col">Status</th>
                    <th scope="col">Due Date</th>
                    <th scope="col">Image</th>
                    </tr>
                  </thead>
                  <tbody>
                { this.props.tickets.map((ticket, index) => {
                return(
                  <tr key={ index }>
                    {(this.state.editable == `${ ticket.id }`)?
                      <th scope="row">
                      <input type='text'
                        ref={input => this.title = input}
                        defaultValue={ ticket.title }/>
                      </th>:
                      <th scope="row">
                        <a href = {`/ticketindex/${ticket.id}`}>{ ticket.title }</a>
                      </th>}


                    {(this.state.editable == `${ ticket.id }`)?
                      <td><input type='text'
                        ref={input => this.project_cat = input}
                        defaultValue={ ticket.project_cat }/></td>:
                      <td>{ ticket.project_cat }</td>}



                    {(this.state.editable == `${ ticket.id }`)?
                      <td><input type='text'
                        ref={input => this.prob_cat = input}
                        defaultValue={ ticket.prob_cat }/></td>:
                      <td>{ ticket.prob_cat }</td>}


                    {(this.state.editable == `${ ticket.id }`)?
                      <td><input type='text'
                        ref={input => this.priority = input}
                        defaultValue={ ticket.priority }/></td>:
                      <td>{ ticket.priority }</td>}


                    {(this.state.editable == `${ ticket.id }`)?
                      <td><input type='text'
                        ref={input => this.desc = input}
                        defaultValue={ ticket.desc }/></td>:
                      <td>{ ticket.desc }</td>}

                    {(this.state.editable == `${ ticket.id }`)?
                      <td><input type='text'
                        ref={input => this.status = input}
                        defaultValue={ ticket.status }/></td>:
                      <td>{ ticket.status }</td>}

                    {(this.state.editable == `${ ticket.id }`)?
                      <td><input type='text'
                        ref={input => this.due_date = input}
                        defaultValue={ ticket.due_date }/></td>:
                      <td>{ ticket.due_date }</td>}

                    {(this.state.editable == `${ ticket.id }`)?
                      <td><input type='text'
                        ref={input => this.image = input}
                        defaultValue={ ticket.image }/></td>:
                      <td>{ ticket.image }</td>}


                    <td>
                    <button type="button" className="btn btn-danger btn-sm"
                      onClick={() => this.handleDelete(`${ ticket.id }`)}
                      style={{margin:"0 0.5em"}}>
                      Delete</button>
                    <button type="button" className="btn btn-info btn-sm"
                      onClick={() => this.handleEdit(`${ ticket.id }`)}
                      style={{margin:"0 0.5em"}}>
                      {(this.state.editable == `${ ticket.id }`)? 'Submit' : 'Edit'}</button>
                    </td>
                  </tr>
                  )
                })}
                  </tbody>
                </table>
                
                { this.state.success && <Redirect to="/ticketindex"/> }
                
              </React.Fragment>
          
          );
          }
        }


export default TicketEdit