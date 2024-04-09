
import './App.scss';
import {Routes, Route} from "react-router-dom";
import Home from './routes/home';

function App() {
  return ( <Routes>
    <Route path="/" element = {<Home></Home>}></Route>

  </Routes>
  );
}

export default App;
