import './App.css';
import Login from './component/Login';
import Signup from './component/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
