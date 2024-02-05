import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import Product from './components/Product';
import {Provider} from 'react-redux'
import { store } from './components/data/store';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import User from './components/Login/User';
import Addproduct from './components/Addproduct';
import Orders from './components/Orders';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Feedback from './components/Feedback';

function App() {
  return (
    <div className="container-fluid">
<Provider store={store}>
<BrowserRouter>
<Routes>
  <Route path='/E-commerce/' element={<Home/>}/>
  <Route path='/Product' element={<Product/>}/>
  <Route path='/login' element={<Login/>} />
  <Route path='/Register' element={<Register/>} />
  <Route path='/admin' element={<User/>}>
<Route path='addproduct' element={<Addproduct/>}/>
<Route path='orders' element={<Orders/>}/>
<Route path='feedback' element={<Feedback/>}/>
<Route path='' element={<Addproduct/>}/>
  </Route>
  
</Routes>
</BrowserRouter>
</Provider>
    </div>
  );
}

export default App;
