import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Menu from './components/nav/Menu.jsx';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/user/Dashboard.jsx';
import PrivateRoute from './components/routes/PrivateRoute.jsx';

const PageNotFound = () =>
{
  return ( <>
    404 | Page not found
  </> );
};

export default function App ()
{
  return (
    <BrowserRouter>
      <Menu />
      <Toaster />
      <Routes>
        <Route>
          <Route path='/' element={ <Home /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/register' element={ <Register /> } />
          <Route path='/dashboard' element={ <PrivateRoute /> } >
            <Route path='' element={ <Dashboard /> } />
          </Route>
        </Route>
      <Route path='*' element/>
      </Routes>

    </BrowserRouter>
  );
}
