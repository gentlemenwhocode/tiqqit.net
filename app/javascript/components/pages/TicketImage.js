import React, { Component } from 'react'
import ActiveStorageProvider from 'react-activestorage-provider'
import {Button} from 'react-bootstrap'

class TicketImage extends Component {
    constructor(props){
        super(props)

        // makes sure the ticket id is converted to a number

        const id = parseInt(props.match.params.id)

        // find ticket id and compares to current id and if true then state is set to ticket

        const ticket = props.tickets.find(ticket => ticket.id === id )
        this.state={
          ticket
        }
      }

//Ticket photo upload handleSubmit

handleSubmit = (ticket)=>{
    this.setState({ ticket })
  }
  
  render(){
    const { ticket } = this.state
        return(
            <>

            {/* boolean operator that makes sure ticket is set to true and permits image to be uploaded using Active Storage Provider */}

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
                    // tickets.id <= ticket.id ln:35
                    path: `/tickets/${ticket.id}`,
                    host: 'localhost',
                    port: 3000,
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

                    {/* status messages of current upload */}
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
                    <Button variant="light"
                    onClick={() => window.history.back()}>
                     Back
                    </Button>
                </div>
                )}
                />
                </div>
            }
            </>
    )
}
}

export default TicketImage

