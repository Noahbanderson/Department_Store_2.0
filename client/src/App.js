import React from 'react';
import { Container } from 'semantic-ui-react'
import { Route, Switch } from 'react-router-dom' 
import Home from "./components/Home"
import About from "./components/About"
import NoMatch from "./components/NoMatch"
import Navbar from './components/Navbar'
import Departments from './components/Departments'
import DepartmentForm from './components/DepartmentForm'
import DepartmentView from './components/DepartmentView'
import ItemForm from './components/ItemForm'
import ItemView from './components/ItemView'


const App = () => {
  return (
   <>
    <Navbar />
    <Container style={{margin: "35px"}}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/departments" component={Departments} />
        <Route exact path="/departments/new" component={DepartmentForm} />
        <Route exact path="/departments/:id" component={DepartmentView} />
        <Route exact path="/departments/:id/edit" component={DepartmentForm} /> 
        <Route exact path="/departments/:id/items/new" component={ItemForm} /> 
        <Route exact path="/departments/:id/items/:id" component={ItemView} /> 
        <Route exact path="/departments/:id/items/:id/edit" component={ItemForm} /> 
               
        <Route component={NoMatch} />
      </Switch>
    </Container>
   </>
  );
}

export default App;
