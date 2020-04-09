import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from '../App'



Enzyme.configure({ adapter: new Adapter() })

  it('renders without crashing', () => {
      const div = document.createElement('div')
      ReactDOM.render(<App />, div)
    })
  
  it('has a name input', ()=>{
    const component = mount(<App />)
    // looks for an anchor tag with the length to be 1
    expect(component.find('a').length).toBe(1)
    })
 

