import { useAuth } from '../context/auth';
import { useCart } from '../context/cart';
import Jumbotron from '../components/cards/Jumbotron';
import { useNavigate } from 'react-router-dom';

export default function Cart ()
{
  //context
  const [ cart, setCart ] = useCart();
  const [ auth, setAuth ] = useAuth();

  //hooks
  const navigate = useNavigate();

  return (
    <>
      <Jumbotron title={ `Hello ${ auth?.token && auth?.user?.name }` }
        subTitle={ cart?.length > 1 ?
          `You have ${ cart.length } items in the cart. ${ auth.token ? "" : "Please login to checkout"
          }`
          : 'Your cart is empty' }
      />

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='p-3 mt-2 mb-2 h4 bg-light text-center'>
              { cart?.length > 1
                ?
                "My Cart"
                :
                <button className='btn btn-primary'
                  onClick={ () => navigate( '/' ) }
                >Continue Shopping
                </button>
              }
            </div>
          </div>
        </div>
      </div>

      { cart?.length > 1 && (
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              <div className='row'>

                { cart?.map( ( p ) => (
                  <div
                    key={ p._id }
                    className='card mb-3'
                    style={ { maxWidth: 540 } }
                  >
                    <div className='row g-0'>
                      <div className='col-md-4'>
                        <img
                          src={ `${ process.env.REACT_APP_API }/product/photo/${ p._id }` }
                          alt={ p.name }
                          style={ {
                            height: "150px",
                            width: "150px",
                            objectFit: "cover",
                            marginLeft: "-12px",
                            borderRopRightRadius: "0px",
                          } }
                        />
                      </div>

                      <div className='col-md-8'>
                        <div className='card-body'>
                          <h5 className='card-title'>
                            { p.name }
                          </h5>
                          <p className='card-text'>
                            { `${ p.description?.substring( 0, 50 ) }`.at.. }
                          </p>

                        </div>
                      </div>
                    </div>
                  </div>
                ) ) }


              </div>
            </div>

            <div className='col-md-4'>Total/Address/Payments</div>
          </div>
        </div>
      ) }
    </>
  );
};