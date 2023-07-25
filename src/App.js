import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';

import SignUp from './componets.js/signup';
import Login from './componets.js/Login';
import Todo from './componets.js/Todo';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/todo' element={<Todo />} />
          
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
