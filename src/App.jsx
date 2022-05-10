import { Route, Switch } from 'react-router-dom';
import Detail from './components/Detail/Detail';
import List from './components/List/List';
import Home from './views/Home';

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/detail/:id">
          <Detail />
        </Route>
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
