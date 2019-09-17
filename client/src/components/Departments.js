import React from 'react'
import {Button, Header, Card} from 'semantic-ui-react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Departments extends React.Component {
  state = { departments: [], }

  componentDidMount() {
    axios.get("/api/departments")
    .then(res => {
      this.setState({departments: res.data})
    })
    .catch(err => {
      console.log(err)
    })
 
  }

  renderDepartments = () => {
    const { departments } = this.state
    if (departments.length === 0) 
      return <Header as="h2">No Departments</Header>
    return departments.map(department => (
      <Card key={department.id}>
        <Card.Content>
          <Card.Header>{department.name}</Card.Header>
          <Card.Meta>{department.dep_type}</Card.Meta>
        </Card.Content>
        <Card.Content extra>   
          <Button as={Link} size="mini" color="black" to={`/departments/${department.id}`}>View</Button>       
        </Card.Content>
      </Card>
    ))
    
  }

  render() {
    return (
      <div> 
        <Header as="h1">Departments</Header>
        <br />
        <Link to="/departments/new">
          <Button color="blue">New Department</Button>
        </Link>
        <br />
        <br />
        <Card.Group>
          {this.renderDepartments()}
        </Card.Group>
      </div>
    )
  }
  
}


export default Departments