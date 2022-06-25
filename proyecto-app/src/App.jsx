import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from "react";
import "./App.css"

function App() {
  return (

    <div className="main">
      <BrowserRouter>
        <div className="header">
        </div>
        <div className="middle">
          <div className="left">
          </div>
          <div className="right">
            {/* <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/Login" element={<Login/>}/>
              <Route path="/Register" element={<Register/>}/>
              <Route path="/RentList" element={<RentList/>}/>
              <Route path="/TotalRentList" element={<TotalRentList/>}/>
              <Route path="/NotFound" element={<NotFound/>}/>
            </Routes> */}
          </div>
        </div>
        <div className="footer" />
      </BrowserRouter>
    </div>

  );

}

export default App;
