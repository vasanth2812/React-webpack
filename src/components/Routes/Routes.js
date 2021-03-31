import {lazy, Suspense} from 'react';
import {Switch, Route} from 'react-router-dom';

const HomePage = lazy(() => import('../../pages/Home'));

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
