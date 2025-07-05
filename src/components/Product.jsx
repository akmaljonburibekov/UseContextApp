 import { FaShoppingCart } from "react-icons/fa";
 import { useContext } from "react";
 import { GlobalContext } from "../context/GlobalContextProvider";

function Product({product}) {
  const { dispatch, cart } = useContext(GlobalContext)

  const itemInCart = cart.find((item) => item.id == product.id);
  const {id, image, title, price} = product

  return (
    <div className='card'>
      <img className='card__image' src={image} alt={product.title} width={50}/>
      <div className="card__info">
          <h5 className='card__title'>{title}</h5>
          <small className='card__price'>Price: ${price}</small>
      </div>
    {
      !itemInCart && (
        <button onClick={() => dispatch({type: "ADD_TO_CART", payload: {...product, amount: 1}})} className="btn card__btn">
          <FaShoppingCart /> Add
        </button>
      )
    }
      {
      itemInCart && (
        <div className="card-action-btns">
          <button onClick={() => {
            if (itemInCart.amount == 1) {
              dispatch({type: "DELETE", payload: itemInCart.id})
            } else {
              dispatch({type: "DECRESE", payload: itemInCart.id})
            }
          }} className="btn card__btn__amount">&#8722;</button>
            <span className="amount">{itemInCart.amount}</span>
          <button onClick={() => {
            dispatch({type: "INCRESE", payload: itemInCart.id})
          }} className="btn card__btn__amount">&#43;</button>
        </div>
      )
    }
    </div>
  )
}

export default Product