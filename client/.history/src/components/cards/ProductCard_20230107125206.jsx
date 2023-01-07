import { Badge } from 'antd';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/cart';

// Used in Home and Shop page as resuable comp
export default function ProductCard ( { p } )
{
  //context
  const [ cart, setCart ] = useCart();
  //hooks
  const navigate = useNavigate();

  return (
    <div className='card mb-3 hoverable' key={ p._id }>

      <Badge.Ribbon text={ `${ p?.sold } sold` } color="red">
        <Badge.Ribbon
          text={ `${ p?.quantity >= 1 ? `${ p?.quantity - p?.sold } in stock` : "Out of Stock" }` }
          placement="start"
          color="green"
        >
          <img
            className='card-img-top'
            src={ `${ process.env.REACT_APP_API }/product/photo/${ p._id }` }
            alt={ p.name }
            style={ { height: '300px', objectFit: 'cover' } }
          />
        </Badge.Ribbon>
      </Badge.Ribbon>

      <div className='card-body'>
        <h5>{ p?.name }</h5>

        <h4 className='fw-bold'>
          { p?.price?.toLocaleString( "en-SG", {
            style: "currency",
            currency: "SGD"
          } ) }
        </h4>

        <p className='card-text'>{ p?.description?.substring( 0, 60 ) }...</p>

      </div>

      <div className='d-flex justify-content-between'>
        <button
          className='btn btn-primary col card-button'
          style={ { borderBottomLeftRadius: "5px" } }
          onClick={ () => navigate( `/product/${ p.slug }` ) }
        >
          View Product
        </button>
        <button
          className='btn btn-outline-primary col card-button'
          style={ { borderBottomRightRadius: "5px" } }
          onClick={ () =>
          {
            setCart( [ ...cart, p ] );
            localStorage.setItem("cart", )
            toast.success( 'Added to cart' );

          } }
        >
          Add To Cart
        </button>
      </div>



      {/* 
      <p>{ moment( p.createdAt ).fromNow() }</p>
      <p>{ p.sold } sold</p> */}
    </div>
  );
}