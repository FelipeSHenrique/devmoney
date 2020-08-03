import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Container, HeaderTop } from './AppStyled';
import HomePage from './pages/HomePage';
import InfoPrice from './components/InfoPrice';

const App = () => {
  return (
    <BrowserRouter>
      <Container>

        <HeaderTop>
          <InfoPrice />
        </HeaderTop>

        <Switch>

          <Route exact path="/">
            <HomePage />
          </Route>

        </Switch>

      </Container>
    </BrowserRouter>
  );
}

export default App;
