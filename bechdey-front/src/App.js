import './App.scss';
import { BrowserRouter as Router,Switch } from 'react-router-dom';
import routes from './config/Routes';
import AppRoutes from './components/AppRoute';
import { AuthProvider } from './context/Context';
import Navbar from './components/Navbar';
import './../node_modules/bootstrap/js/src/dropdown';
import './../node_modules/bootstrap/js/src/collapse';
import Footer from './components/Footer';
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
          <Footer></Footer>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
