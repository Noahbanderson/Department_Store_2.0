import React from 'react'
import {Header, Form} from 'semantic-ui-react'
import axios from 'axios';

class DepartmentForm extends React.Component {
  state={
    name: "",
    dep_type: "", 
  }

  componentDidMount() {
    if(this.props.match.params.id){
      axios.get(`/api/departments/${this.props.match.params.id}`)
      .then(res => {
        const {name, dep_type} = res.data
        this.setState({name, dep_type})
      })
      .catch(err => {
        console.log(err)
      })
    }
  }

  handleChange = (e, {name, value}) => {
    this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.props.match.params.id){
      axios.put(`/api/departments/${this.props.match.params.id}`, this.state)
      .then(res => {
        this.props.history.push(`/departments/${this.props.match.params.id}`)
      })
      .catch(err => {
        console.log(err)
      })
    } else {
        axios.post("/api/departments", this.state)
        .then( res => {
          this.props.history.push("/departments")
        })
        .catch ( err => {
          console.log(err)
        })
    }
  }

  render() {
    return (
      <div>
        <Header as="h1">{this.props.match.params.id ? "Edit Department" : "New Department"}</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group width="equal">
            <Form.Input 
            required
            placeholder="Name"
            label="Name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}            
            />
            <Form.Input 
            required
            placeholder="Department Type"
            label="Department Type"
            name="dep_type"
            value={this.state.dep_type}
            onChange={this.handleChange}            
            />
          </Form.Group>
          <Form.Button color="blue">Submit</Form.Button>
        </Form> 
      </div>
    )
  }
}

export default DepartmentForm