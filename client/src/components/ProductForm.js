import React from 'react'
import {Header, Form} from 'semantic-ui-react'
import axios from 'axios';

class ProductForm extends React.Component {
  state={
    name: "",
    description: "", 
    price: "",
    department: "",
  }

  componentDidMount() {
    if(this.props.match.params.id){
      
      // axios get call

    }
  }

  handleChange = (e, {name, value}) => {
    this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // if id, then update
    axios.post("/api/products", this.state)
    .then( res => {
      this.props.history.push("/products")
    })
    .catch ( err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div>
        <Header as="h1">{this.props.match.params.id ? "Edit Product" : "New Product"}</Header>
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
            placeholder="Description"
            label="Description"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}            
            />
          </Form.Group>
          <Form.Group width="equal">
            <Form.Input 
            required
            placeholder="Price"
            label="Price"
            name="price"
            type="number"
            value={this.state.price}
            onChange={this.handleChange}           
            />
            <Form.Input 
            required
            placeholder="Department"
            label="Department"
            name="department"
            value={this.state.department}
            onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Button color="blue">Submit</Form.Button>
        </Form> 
      </div>
    )
  }
}

export default ProductForm