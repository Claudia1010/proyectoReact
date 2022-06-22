import { useState } from "react";
// import { BrowserRouter, Routes } from "react-router-dom"
import "./components/Header/Header";
import "./App.css"
import "./container/Home/Home"

function App() {
  return (

      <BrowserRouter className="browser">
        <div className="home">
          <Header className="header" />

          <div className="middle">
            <div className="left"></div>

            <div className="right">
              <Routes>
              </Routes>
            </div>
          </div>

          <Footer className="footer" />
        </div>
      </BrowserRouter>
  );
}

export default App;
