import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

export default function App ()
{
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={ <Home /> } />
          <Route path='/' element={ <Home /> } />
          <Route path='/' element={ <Home /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
