import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import LeftLinks from "./components/LeftLinks/LeftLinks"
import Home from './container/Home/Home';
import Searches from './container/Searches/Searches';
import Login from './container/Login/Login';
import Register from './container/Register/Register';
import RentList from './container/RentList/RentList';
import TotalRentList from './container/TotalRentList/TotalRentList';
import Footer from './components/Footer/Footer';

import "./App.css"

function App() {

  return (
    <div className="main">
      <BrowserRouter>
        <Header />
        <div className="middle">
          <LeftLinks />
          <div className="rightContainers">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/searches" element={<Searches />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/rentList" element={<RentList />} />
              <Route path="/totalRentList" element={<TotalRentList />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </div>

  );

}

export default App;
