import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NewTicket from '../pages/NewTicket'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Redirect } from "react-router-dom"


Enzyme.configure({ adapter: new Adapter() })

    it('renders without crashing', () => {
      const div = document.createElement('div')
      ReactDOM.render(<NewTicket />, div)
    })

    it('has a title input', ()=>{
      const component = mount(<NewTicket />)
      // looks for an id of title on the label tag
      expect(component.find('label#title').text()).toBe("Title")
    })
    
    it('has a category input', ()=>{
      const component = mount(<NewTicket />)
      // looks for an id of project_cat on the label tag
      expect(component.find('label#project_cat').text()).toBe("Category")
    })
    it('has a type input', ()=>{
      const component = mount(<NewTicket />)
      // looks for an id of prob_cat on the label tag
      expect(component.find('label#prob_cat').text()).toBe("Type")
    })
    it('has a priority input', ()=>{
      const component = mount(<NewTicket />)
      // looks for an id of priority on the label tag
      expect(component.find('label#priority').text()).toBe("Priority")
    })
    it('has a description input', ()=>{
      const component = mount(<NewTicket />)
      // looks for an id of desc on the label tag
      expect(component.find('label#desc').text()).toBe("Description")
    })
    it('has a status input', ()=>{
      const component = mount(<NewTicket />)
      // looks for an id of status on the label tag
      expect(component.find('label#status').text()).toBe("Status")
    })
    it('has a due_date input', ()=>{
      const component = mount(<NewTicket />)
      // looks for an id of due_date on the label tag
      expect(component.find('label#due_date').text()).toBe("Due Date")
    })
    it('has a image input', ()=>{
      const component = mount(<NewTicket />)
      // looks for an id of image on the label tag
      expect(component.find('label#image').text()).toBe("Image")
    })
    it('has a comments input', ()=>{
      const component = mount(<NewTicket />)
      // looks for an id of comments on the label tag
      expect(component.find('label#comments').text()).toBe("Comments")
    })
    