import { useState } from "react";
import "./App.css";
import "./components/Header/Header";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Left from "./components/Left/Left";
import Right from "./components/Right/Right";
function App() {
  return (
    <div className="home">
      <div className="header">
        <Header />
      </div>

      <div className="middle">
        <div className="left">
          <Left />
        </div>


        <div className="right">
          <Right />

        <div className="home">
          <div className="header">
          </div>
        
          <div className="middle">
            <div className="left">
              
            </div>

            <div className="right">
            
            </div>
          </div>

          <div className="footer" />

        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
