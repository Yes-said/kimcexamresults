import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/Pages/About';
import Contacts from './Components/Pages/Contacts';
import Documentation from './Components/Pages/Documentation';
import Home from './Components/Pages/Home';
function App(){
return (
<div className="App">
  <Navbar/>
  <Routes>
  <Route path="/" element={<Home/>}/>
<Route path="/About" element={<About/>}/>
<Route path="/Contacts" element={<Contacts/>}/>
<Route path="/Documentation" element={<Documentation/>}/>
  </Routes>
  </div>
  );
}
export default App;