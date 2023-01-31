import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import { useUser } from './context/UserContext.js';

function App() {
  const { user } = useUser();
  return (
    <div className="App">
      <Header />
      <Switch>
        {/* <Route path="/auth/:type" component={Auth} />
        <Route path="/items" component={Items} /> */}
        <Route exact path="/">
          <>
            {user && <Redirect to="/items" />}
            {!user && <Redirect to="/auth/sign-in" />}
          </>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
