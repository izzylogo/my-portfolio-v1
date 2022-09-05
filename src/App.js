import { Navbar, Home, Service, About, Project, Contact } from './components'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <About/>
      <Service/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
