
import './App.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import About from './pages/about';


function App() {
  return (
     <BrowserRouter>
     <Routes>
      <Route  path='/'        element={<Home/>} />
      <Route  path='/login'   element={<Login/>} />
      <Route  path='/signup'  element={<Signup/>} />
      <Route  path='/about'  element={<About/>} />
     </Routes>
     </BrowserRouter>
  );
}

export default App;
