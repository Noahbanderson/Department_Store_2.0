import React from 'react'
import axios from 'axios';
import {Segment, Header, Button} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class ProductView extends React.Component {
  state={
    product: {}
  }

  componentDidMount() {
    axios.get(`/api/products/${this.props.match.params.id}`)
      .then (res => {
        this.setState({product: res.data})
      })
      .catch (err => 
        console.log(err))
  }

  render() {
    const {name, description, department, price} = this.state.product
    return (
      <div>
       <Segment>
         <Header as="h1"> {name} </Header>
         <Header as="h3"> {department} </Header>
         <Header as="h5" color="grey"> ${price} </Header>
         <p>{description}</p>
       </Segment>
       <br />
       <br />
       <Button onClick={this.props.history.goBack} color="black">Back</Button>
       <Button as={Link} to={`/products/${this.props.match.params.id}/edit`} color="black">Edit</Button>
      </div>
    )
  }
}



export default ProductView
