import React from 'react';
import './Band.css'

const Band = (props) => {
    const {name,date,time,place,img,ticketPrice} = props.band
    return (
        <div className="col text-center">
            <div className="card h-100 band">
                <img src={img} className="card-img-top  " alt="..."/>
                <div className="card-body">
                    <h3 className="card-title ">{name}</h3>
                    <p className="card-text">Date : {date}</p>
                    <p className="card-text">Time : {time}</p>
                    <p className="card-text">Ticket  Price : {ticketPrice}</p>
                    <h6 className="card-text fs-6">place: {place}</h6>
                    
                </div>
                <div className="">
                    <button onClick={()=>props.handleAddtoCart(props.band)}className="cart-button"><i class="fas fa-heart me-2"></i>Get Tickets Now</button>
                    <p><i class="fab fa-facebook-square"></i><i class="fab fa-twitter-square"></i><i class="fab fa-instagram-square"></i><i class="fab fa-facebook-messenger"></i></p>
                </div>
            </div>
            
        </div>
    );
};

export default Band;
