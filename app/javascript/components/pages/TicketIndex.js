import React from "react"
import {Table} from 'react-bootstrap'

class TicketIndex extends React.Component {
    
  render(){
      return(
        <React.Fragment>

          {/* import table component with React Bootstrap keywords for styling */}

          <Table responsive striped bordered hover variant="light">
          <thead>
            <tr>
              <th >Title</th>
              <th >Project Category</th>
              <th >Type</th>
              <th >Priority</th>
              <th >Description</th>
              <th >Status</th>
              <th >Due Date</th>
              <th >Created By</th>
              <th >Created On</th>
            </tr>
          </thead>
          <tbody>
            
            {/* maps through all tickets and displays their contents */}

        { this.props.tickets.map((ticket, index) => {
        return(
          <tr key={ index }>
            <th><a href = {`/ticketindex/${ticket.id}`}>{ ticket.title }</a></th>
            <td>{ ticket.project_cat }</td>
            <td>{ ticket.prob_cat }</td>
            <td>{ ticket.priority }</td>
            <td>{ ticket.desc }</td>
            <td>{ ticket.status }</td>
            <td>{ ticket.due_date }</td>
            <td>{ ticket.user_email }</td>
            <td>{ ticket.created_at }</td>
          </tr>
          )
        })}
          </tbody>
        </Table>
        </React.Fragment>
      );
  }
} 
export default TicketIndex