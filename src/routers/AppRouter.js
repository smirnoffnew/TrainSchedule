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
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/TableInside" component={TableInside} />
      <Route exact path="/TableInsideLiveLine" component={TableInsideLiveLine} />
      <Route exact path="/TableOutside" component={TableOutside} />
      <Route exact path="/TableOutsideLiveLine" component={TableOutsideLiveLine} />
      <Route exact path="/TableSmallTwo" component={TableSmallTwo} />
      <Route exact path="/TableSmallThree" component={TableSmallThree} />
    </Switch>
  )
};

export default AppRouter;

