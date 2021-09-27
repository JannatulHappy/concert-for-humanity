import React from 'react';
import './Cart.css'
// cart
const Cart = (props) => {
    const {cart} = props;
    // update total cost
    const total = cart.reduce((previous, band)=>previous+ band.ticketPrice,0)
    return (
        // cart
        <div className="cart text-white ms-5">
           <h5>Ticket : {props.cart.length}</h5> 
            <br></br>
            <p>Total Cost : {total.toFixed(2)}</p>
            
            <h3>
                {
                    cart.map(band=><div className="d-flex justify-content-center align-items-center click">
                        <img width="70px"height="70px"src={band.img} alt="" />
                        <h4 className="text-center p-4">{band.name}</h4>
                    </div>)
                }
            </h3>
            
        </div>
    );
};

export default Cart;
