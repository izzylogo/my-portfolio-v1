import { Navbar, Home, Service, About, Project, Contact } from './components'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route></Route>
        </Routes>
        <Navbar/>
        <Home />
        <About/>
        <Service/>
        <Project/>
        <Contact/>
      </BrowserRouter>
    </div>
  );
}

export default App;
