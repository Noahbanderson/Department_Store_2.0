import React from 'react';
import { Container } from 'semantic-ui-react'
import { Route, Switch } from 'react-router-dom' 
import Home from "./components/Home"
import About from "./components/About"
import NoMatch from "./components/NoMatch"
import Navbar from './components/Navbar'
import Products from './components/Products'
import ProductForm from './components/ProductForm'
import ProductView from './components/ProductView'

const App = () => {
  return (
   <>
    <Navbar />
    <Container style={{margin: "35px"}}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/new" component={ProductForm} />
        <Route exact path="/products/:id" component={ProductView} />
        <Route exact path="/products/:id/edit" component={ProductForm} />                
        <Route component={NoMatch} />
      </Switch>
    </Container>
   </>
  );
}

export default App;
