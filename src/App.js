import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import { Home } from './Components/Home';
import {About} from './Components/About';
import { Signin } from './Components/Signin';
import { SignUp } from './Components/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={< Home/>} />
        <Route path='/about' element={< About/>} />
        <Route path='/signin' element={< Signin/>} />
        <Route path='/signup' element={< SignUp/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
