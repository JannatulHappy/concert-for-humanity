import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
    const total = cart.reduce((previous, band)=>previous+ band.ticketPrice,0)
    return (
        <div className="cart">
           <h5>Items Orders : {props.cart.length}</h5> 
            <br></br>
            <p>Total : {total.toFixed(2)}</p>
            <div>
                <h2>{}</h2>
            </div>
        </div>
    );
};

export default Cart;
