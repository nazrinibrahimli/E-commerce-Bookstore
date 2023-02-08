import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ShoppingCartProvider} from './context/CartContext'
import {useSelector, useDispatch} from 'react-redux'
import {increment} from './actions'
import Item from "./pages/Item";
import MainPage from "./components/MainPage";
import Medium from "./components/Medium";
import Login from "./components/Login";

function App() {
const counter = useSelector(state => state.counter);
const dispatch = useDispatch();

  return (
          <BrowserRouter>
          <ShoppingCartProvider>
                  <div className="App h-screen">
                    {/* <h1>Counter {counter}</h1>
                    <button onClick={()=> dispatch(increment())}>+</button> */}
                      <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="items" element={<MainPage/>}/>
                        <Route path="home" element={<Home/>}/>
                        <Route path="login" element={<Login/>}/>

                      </Routes>
                  </div>
           </ShoppingCartProvider>
          </BrowserRouter>
  );
}

export default App;

