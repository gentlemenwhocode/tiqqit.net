import React from "react"


class TicketIndex extends React.Component {
    
  render(){
    console.log(this.props.tickets)
      return(
        <React.Fragment>
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
              <th scope="col">Created By</th>
              <th scope="col">Created On</th>
            </tr>
          </thead>
          <tbody>
        { this.props.tickets.map((ticket, index) => {
        return(
          <tr key={ index }>
            <th scope="row"><a href = {`/ticketindex/${ticket.id}`}>{ ticket.title }</a></th>
            <td>{ ticket.project_cat }</td>
            <td>{ ticket.prob_cat }</td>
            <td>{ ticket.priority }</td>
            <td>{ ticket.desc }</td>
            <td>{ ticket.status }</td>
            <td>{ ticket.due_date }</td>
            <td>{ ticket.user_id }</td>
            <td>{ ticket.created_at }</td>
          </tr>
          )
        })}
          </tbody>
        </table>
        </React.Fragment>
      );
  }
} 
export default TicketIndex