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
import 'bootstrap/dist/css/bootstrap.css'
import { Authen } from './components/Api/Autho';
import { adminCheck } from './components/Api/Getdata';
import NewProduct from './components/NewProduct';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
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

<Route path='newProduct' element={<NewProduct/>}/>
  </Route>
  <Route path='*' element={<h1>page not found</h1>}/>
</Routes>
</BrowserRouter>
</Provider>
    </div>
  );
}

export default App;
