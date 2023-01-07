/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router-dom';
import Search from '../forms/Search';
import useCategory from '../../hooks/useCategory';

export default function Menu ()
{

  //context
  const [ auth, setAuth ] = useAuth();
  //hooks
  const categories = useCategory();
  const navigate = useNavigate();

  console.log( "categories in menu = >", categories );

  const logout = () =>
  {
    setAuth( { ...auth, user: null, token: "" } );
    localStorage.removeItem( "auth" );
    navigate( "/login" );
  };

  return (
    <>
      <ul className="nav d-flex justify-content-between shadow-sm mb-2">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/">HOME</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/shop">SHOP</NavLink>
        </li>


        <a className='nav-link pointer dropdown-toggle'
          data-bs-toggle="dropdown">
          Categories
        </a>

        <div className='dropdown-menu' 
        >
          { categories?.map( ( c ) => (
            <li>
              <NavLink
                className="nav-link"
                to={ `/category/${ c.slug }` }
              >
                { c.name }
              </NavLink>
            </li>
          ) ) }
        </div>

        <Search />



        {
          !auth?.user ? (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">LOGIN</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">REGISTER</NavLink>
              </li>


            </>
          ) : (
            <div className='dropdown'>

              <li>
                <a className='nav-link pointer dropdown-toggle' data-bs-toggle="dropdown">
                  { auth?.user.name }
                </a>
                <ul className='dropdown-menu'>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to={ `/dashboard/${ auth?.user?.role === 1 ? "admin" : "user" }` }
                    >
                      Dashboard
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <a onClick={ logout } className="nav-link pointer" >
                      Logout
                    </a>
                  </li>
                </ul>

              </li>
            </div>

          )
        }

      </ul>
    </>
  );
} 