
import './App.css';
import {Routes, Route} from "react-router-dom";
import Navbar from './componets/navigation_bar/navigation_bar.componet';

function App() {
  return ( <Routes>
    <Route path="/" element = {<Navbar></Navbar>}></Route>

  </Routes>
  );
}

export default App;
