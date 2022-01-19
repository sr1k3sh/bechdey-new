import './App.scss';
import { BrowserRouter as Router,Switch } from 'react-router-dom';
import routes from './config/Routes';
import AppRoutes from './components/AppRoute';
import { AuthProvider } from './context/Context';
import Navbar from './components/Navbar';
import 'popper.js';
import './../node_modules/bootstrap/js/src/dropdown';
function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Navbar></Navbar>
          <Switch>
            {routes.map((route) => (
              <AppRoutes
							key={route.path}
							path={route.path}
							component={route.component}
							isPrivate={route.isPrivate}
						  />
            ))}
          </Switch>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
