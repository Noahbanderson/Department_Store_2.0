import React from 'react'
import axios from 'axios';
import {Segment, Header, Button, Card} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class DepartmentView extends React.Component {
  state={
    department: {},
    items: []
  }

  componentDidMount() {
    axios.get(`/api/departments/${this.props.match.params.id}`)
      .then (res => {
        this.setState({department: res.data})
      })
      .catch (err => 
        console.log(err))

    axios.get(`/api/departments/${this.props.match.params.id}/items`)
      .then (res => {
        
        this.setState({items: res.data})
      })
      .catch (err => 
        console.log(err))
  }


  renderItems = () => {
    
    const { items } = this.state
    if (items.length === 0) 
      return <Header as="h2">No Items</Header>
    return items.map(item => (
      <Card key={item.id}>
        <Card.Content>
          <Card.Header>{item.name}</Card.Header>
          <Card.Meta>{item.description}</Card.Meta>
        </Card.Content>
        <Card.Content extra>   
          <Button as={Link} size="mini" color="black" >View</Button>       
        </Card.Content>
      </Card>
    ))
    
  }


  render() {
    const {name, dep_type} = this.state.department
    return (
      <div>
        <div>
          <Segment>
            <Header as="h1"> {name} </Header>
            <Header as="h3"> {dep_type} </Header>
            <Header as="h5" color="grey"> Dep Items Go Here</Header>
            
          </Segment>
          <br />
          <br />
          <Button onClick={this.props.history.goBack} color="black">Back</Button>
          <Button as={Link} to={`/departments/${this.props.match.params.id}/edit`} color="black">Edit</Button>
          <br />
          <br />
          <hr />
          <br />          

        </div>  
        <Header as="h2">Items</Header>
        <Card.Group>
          {this.renderItems()}
        </Card.Group>

      </div>
    )
  }
}



export default DepartmentView
