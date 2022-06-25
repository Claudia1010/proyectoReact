import {BrowserRouter, Routes, Route} from 'react-router-dom';
/* import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'; */
import NavBar from './components/NavBar/NavBar';
import Home from './container/Home/Home';
import Login from './container/Login/Login';
import NotFound from './container/NotFound/NotFound';
import Register from './container/Register/Register';
import RentList from './container/RentList/RentList';
import TotalRentList from './container/TotalRentList/TotalRentList';
import "./App.css"


function App() {
  return (

    <div className="main">
      <BrowserRouter>
        <div className="header">
          <NavBar />
        </div>
        <div className="middle">
          <div className="leftLinks">
          </div>
          <div className="rightContainers">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/Login" element={<Login/>}/>
              <Route path="/Register" element={<Register/>}/>
              <Route path="/RentList" element={<RentList/>}/>
              <Route path="/TotalRentList" element={<TotalRentList/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
          </div>
        </div>
        <div className="footer" />
      </BrowserRouter>
    </div>

  );

}

export default App;
