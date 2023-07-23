
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import  About  from './Pages/About/About';
import  Header  from './Pages/Shared/Header/Header';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Checkout from './Pages/Checkout/Checkout';
import RequiteAuth from './Pages/Login/Register/RequiteAuth/RequiteAuth';
import AddService from './Pages/AddService/AddService';
import Manege from './Pages/Manege/Manege';

function App() {
  return (
    <div >
   <Header></Header>
      <Routes>
        <Route path="/" element={
            <RequiteAuth> 
              <Home/>
            </RequiteAuth>
        }></Route>
        <Route path="/home" element={
            <RequiteAuth> 
            <Home/>
          </RequiteAuth>
        }></Route>
        <Route path='/service/:sId' element={<ServiceDetail/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/checkout" element={  
          <RequiteAuth> 
          <Checkout/>
          </RequiteAuth>
        }></Route>
        <Route path="/addService" element={  
          <RequiteAuth> 
          <AddService/>
          </RequiteAuth>
        }></Route>
        <Route path="/manege" element={  
          <RequiteAuth> 
          <Manege/>
          </RequiteAuth>
        }></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
