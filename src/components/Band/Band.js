import React from 'react';
import './Band.css'

const Band = (props) => {
    const {name,date,time,place,img,ticketPrice} = props.band
    return (
        <div className="col">
            <div className="card h-100 band">
                <img src={img} className="card-img-top " alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Date : {date}</p>
                    <p className="card-text">Time : {time}</p>
                    <p className="card-text">place: {place}</p>
                    <p className="card-text">Ticket  Price : {ticketPrice}</p>
                </div>
                    <div className="">
                    <button onClick={()=>props.handleAddtoCart(props.band)}className="cart-button">Get Tickets Now</button>
                </div>
            </div>
            
        </div>
    );
};

export default Band;
