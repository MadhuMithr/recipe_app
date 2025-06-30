
import './App.css';
import Getfood from './Getfood';
import ListFav from './listFav';
import Login from './Login';
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Protectedroute from './utils/Protectedroute';
import { Provider } from 'react-redux';
import store from './store/store';
function App() {
  return (
    <div className="App">

      
      <BrowserRouter>
        <Routes>

          {/* <Route path={<Protectedroute/>}>
         <Route path="/Getfood" element={<Getfood/>}></Route>
         </Route> */}
          <Route path='/' element={
            <Protectedroute>
              <Getfood />
            </Protectedroute>
          } />


          <Route path="/login" element={<Login />}></Route>
           <Route path="/listFav" element={<ListFav />}></Route>
           <Route path="/Getfood" element={<Getfood/>}>
       
       </Route> 
        </Routes>
      </BrowserRouter>
       
    </div>

  );
}

export default App;
