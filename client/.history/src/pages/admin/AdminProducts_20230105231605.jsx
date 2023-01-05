/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from 'react';
import { useAuth } from '../../context/auth';
import Jumbotron from '../../components/cards/Jumbotron';
import AdminMenu from '../../components/nav/AdminMenu';
import axios from 'axios';
import { Link } from "react-router-dom";

export default function AdminProducts ()
{
  //context
  const [ auth, setAuth ] = useAuth();

  //state
  const [ products, setProducts ] = useState( [] );

  useEffect( () =>
  {
    loadProducts();
  }, [] );

  const loadProducts = async () =>
  {
    try
    {
      const { data } = await axios.get( "/products" );
      setProducts( data );
    } catch ( error )
    {
      console.log( error );
    }
  };

  return (
    <>
      <Jumbotron
        title={ `Hello ${ auth?.user?.name }` }
        subTitle="Admin Dashboard"
      />

      <div className='container-fluid'>
        <div className='row'>
          {/* Sidebar */ }
          <div className='col-md-3'>
            <AdminMenu />
          </div>
          {/* Content */ }
          <div className='col-md-9'>
            <div className='p-3 mt-2 mb-2 h4 bg-light'>Products</div>
            { products.length }
            { products?.map( ( p ) =>
              <Link
                key={ p._id }
                to={ `/dashboard/admin/product/update/${ p.slug }` }

              >

                <div className='card mb-3'>
                  <div className='row g-0'>
                    {/* Left column - image */ }
                    <div className='col-md-4'>
                      <img
                        src={
                          `${ process.env.REACT_APP_API }/product/photo/${ p._id }` }
                        alt={ p.name }
                        className="img img-fluid rounded-start"
                      />
                    </div>
                    {/* Right column - product details */ }
                    <div className='col-md-8'>

                      <div className='card-body'>
                        <h5 className='card-title'>{ p.name }</h5>
                        <p className='card-text'>{ p.description }</p>
                        <p className='card-text'>

                          <small className='text-muted'></small>
                        </p>


                      </div>
                    </div>
                  </div>
                </div>

              </Link> ) }
          </div>

        </div>
      </div>

      {/* <pre>{ JSON.stringify( auth, null, 4 ) }</pre> */ }
    </>
  );
};