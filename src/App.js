import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Cart from './Pages/Cart/Cart';
import styled from 'styled-components'

// import pages 
import Home from './Pages/Home/Home';

export default function App (props){
  
    return (
      <React.Fragment>
        <Wrapper>
          <Header/>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/cart" component={Cart}/>
          </Switch>
        </Wrapper>
      </React.Fragment>
    )
}

const Wrapper = styled.div`
  max-width: 1330px;
  margin: 30px auto;
  background: #fff;
  padding: 20px 60px;
  border-radius: 30px;


`;

