import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Header/>
          <div className="generalContainer">
            <div className="endPoints">  
            </div>
            <div className="routes">
              <Routes>
                <Route />
              </Routes>
            </div>
          </div>
          <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
