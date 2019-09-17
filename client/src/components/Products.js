import React from 'react'
import {Button, Header, Card} from 'semantic-ui-react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Products extends React.Component {
  state = { products: [], }

  componentDidMount() {
    axios.get("/api/products")
    .then(res => {
      this.setState({products: res.data})
    })
    .catch(err => {
      console.log(err)
    })
 
  }

  addProduct = () => {

  }

  editProduct = () => {

  }

  deleteProduct = () => {

  }

  renderProducts = () => {
    const { products } = this.state
    if (products.length === 0) 
      return <Header as="h2">No Products</Header>
    return products.map(product => (
      <Card key={product.id}>
        <Card.Content>
          <Card.Header>{product.name}</Card.Header>
          <Card.Meta>{product.department}</Card.Meta>
          <Card.Description>{product.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>   
          <Button as={Link} size="mini" color="black" to={`/products/${product.id}`}>View</Button>       
        </Card.Content>
      </Card>
    ))
    
  }

  render() {
    return (
      <div> 
        <Header as="h1">Products</Header>
        <br />
        <Link to="/products/new">
          <Button color="blue">New Product</Button>
        </Link>
        <br />
        <br />
        <Card.Group>
          {this.renderProducts()}
        </Card.Group>
      </div>
    )
  }
  
}


export default Products