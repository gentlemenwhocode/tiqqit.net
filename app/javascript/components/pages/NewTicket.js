import React from "react"
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Redirect } from "react-router-dom"

class NewTicket extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            success: false, 
            form: {
                title: '',
                project_cat: '',
                prob_cat: '',
                priority: '',
                desc: '',
                status: '',
                due_date: '',
                image: '',
                comments: '',
            }

        }
    }
    handleChange = (event) => {
        let { form } = this.state
        form[event.target.name] = event.target.value
        this.setState({ form: form })
      }
    
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleSubmit(this.state.form)
        this.setState({ success: true })
      }
    render(){
        return(
        <>
            <Form>
            <FormGroup style={{width: "30rem", margin:"0.5rem 2rem"}}>
                <Label htmlFor="title" id="title">Title</Label>
                    <Input
                        type="string"
                        name="title"
                        onChange={ this.handleChange }
                        value={ this.state.form.title }
                    />
                <Label htmlFor="project_cat" id="project_cat">Category</Label>
                    <Input
                        type="string"
                        name="project_cat"
                        onChange={ this.handleChange }
                        value={ this.state.form.project_cat }
                    />
                <Label htmlFor="prob_cat" id="prob_cat">Type</Label>
                    <Input
                        type="string"
                        name="prob_cat"
                        onChange={ this.handleChange }
                        value={ this.state.form.prob_cat }
                    />
                <Label htmlFor="priority" id="priority">Priority</Label>
                    <Input
                        type="integer"
                        name="priority"
                        onChange={ this.handleChange }
                        value={ this.state.form.priority }
                    />
                <Label htmlFor="desc" id="desc">Description</Label>
                    <Input
                        type="string"
                        name="desc"
                        onChange={ this.handleChange }
                        value={ this.state.form.desc }
                    />
                <Label htmlFor="status" id="status">Status</Label>
                    <Input
                        type="string"
                        name="status"
                        onChange={ this.handleChange }
                        value={ this.state.form.status }
                    />
                <Label htmlFor="due_date" id="due_date">Due Date</Label>
                    <Input
                        type="datetime"
                        name="due_date"
                        onChange={ this.handleChange }
                        value={ this.state.form.due_date }
                    />
                <Label htmlFor="image" id="image">Image</Label>
                    <Input
                        type="string"
                        name="image"
                        onChange={ this.handleChange }
                        value={ this.state.form.image }
                    />
                <Label htmlFor="comments" id="comments">Comments</Label>
                    <Input
                        type="text"
                        name="comments"
                        onChange={ this.handleChange }
                        value={ this.state.form.comments }
                    />
            </FormGroup>
             {/* CHANGE REDIRECT */}
            <Button type="button" id="submit" class="btn btn-outline-primary"
              style={{margin:"1rem 8rem"}}
              onClick={ this.handleSubmit }>
              Create a New Ticket
            </Button>
              { this.state.success && <Redirect to="/ticketindex"/> }
            </Form>
        </>    
        )
    }
}

export default NewTicket