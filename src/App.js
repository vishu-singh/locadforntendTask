import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { Login } from './components/Login/Login';
import { ProductListing } from './components/Products/ProducListing';
import { EditProduct } from './components/Products/EditProduct';
import { AddProduct } from './components/Products/AddProducts';
import 'react-toastify/dist/ReactToastify.css';
import { MainLayout } from './components/Layouts/MainLayout';

function App() {
  const PrivateRoutes = ({ component: Component, ...params }) => (
    <Route
      {...params}
      render={props =>
        localStorage.getItem('token') ? (
          <Component {...props} {...params} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
            }}
          />
        )
      }
    />
  );

  return (
    <>
      <Router>
        <Switch>
          <MainLayout>
            <Route exact path="/" component={Login} />
            <PrivateRoutes exact path="/products" component={ProductListing} />
            <PrivateRoutes exact path="/products/add" component={AddProduct} />
            <PrivateRoutes
              exact
              path="/products/edit/:id"
              component={EditProduct}
            />
          </MainLayout>
        </Switch>
      </Router>
    </>
  );
}

export default App;
