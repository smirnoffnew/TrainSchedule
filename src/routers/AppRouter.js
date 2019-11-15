import React from 'react';
import { Route, Switch } from 'react-router-dom'
import TableInside from '../pages/TableInside';
import TableInsideLiveLine from '../pages/TableInsideLiveLine';
import TableOutside from '../pages/TableOutside';
import TableOutsideLiveLine from '../pages/TableOutsideLiveLine';
import TableSmallTwo from '../pages/TableSmallTwo';
import TableSmallThree from '../pages/TableSmallThree';
import App from '../component/App';

const AppRouter = () => {

  return (
    <>
      <App />

      <Switch>
        <Route path="/TableInside" component={TableInside} />
        <Route path="/TableInsideLiveLine" component={TableInsideLiveLine} />
        <Route path="/TableOutside" component={TableOutside} />
        <Route path="/TableOutsideLiveLine" component={TableOutsideLiveLine} />
        <Route path="/TableSmallTwo" component={TableSmallTwo} />
        <Route path="/TableSmallThree" component={TableSmallThree} />
      </Switch>
    </>
  )
};

export default AppRouter;

