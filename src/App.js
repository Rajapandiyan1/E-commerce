import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import Product from './components/Product';
import {Provider} from 'react-redux'
import { store } from './components/data/store';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import User from './components/Login/User';

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
  <Route path='/admin' element={<User/>}/>
</Routes>
</BrowserRouter>
</Provider>
    </div>
  );
}

export default App;
