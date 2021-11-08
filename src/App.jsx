import { index } from 'pages';
import { Admin } from 'pages/Admin';
import { Login } from 'pages/Login';
import { Registro } from 'pages/Registro';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.css'
import { PublicLayout } from 'layouts/PublicLayout';
import { PrivateLayout } from 'layouts/PrivateLayout';
import { AuthLayout } from 'layouts/AuthLayout';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login'>
        <Login/>
        </Route>
        <Route path='/registro'>
        <Registro/>
        </Route>
        <Route path='/admin'>
        <AuthLayout>
        <Admin/>
        </AuthLayout>
        </Route>
        <Route path='/'>
        <PublicLayout/>
        <index/>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
