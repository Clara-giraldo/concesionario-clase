import { index } from 'pages';
import { Admin } from 'pages/Admin';
import { Login } from 'pages/Login';
import { Registro } from 'pages/Registro';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.css'
import { PublicLayout } from 'layouts/PublicLayout';
import { PrivateLayout } from 'layouts/PrivateLayout';
import { AuthLayout } from 'layouts/AuthLayout';
import { vehiculos } from 'pages/admin/vehiculos';
import { Clientes } from 'pages/admin/Clientes';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={['/admin', '/admin/vehiculos', '/admin/clientes']}>
          <PublicLayout>
            <switch>
              <Route path='/admin/vehiculos'>
                <vehiculos />
              </Route>
              <Route path='/admin/clientes'>
                <Clientes />
              </Route>
              <Route path='/admin'>
                <Admin />
              </Route>
            </switch>
          </PublicLayout>
        </Route>
        <Route path={['/login','/registro']}>
          <AuthLayout>
            <switch>
            <Route path='/login'>
                <Login />
            </Route>
            <Route path='/registro'>
                <Registro />
            </Route>
            </switch>
          </AuthLayout>
        </Route>
        <Route path={['/']}>
          <PublicLayout>
          <switch>
              <Route path='/index'>
                <index />
              </Route>
            </switch>
          </PublicLayout>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
