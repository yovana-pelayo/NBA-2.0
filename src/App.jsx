import { Route, Switch } from 'react-router-dom';
import List from './components/List/List';
import Home from './views/Home';

export default function App() {
  return (
    <>
      <Switch>
        {/* <Route exact path="/detail/:people">
          <Detail />
        </Route> */}
        <Route exact path="/list">
          <List />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}
