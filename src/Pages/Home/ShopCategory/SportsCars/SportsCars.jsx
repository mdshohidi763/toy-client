import React from 'react';

const SportsCars = ({truck}) => {
    const {_id,name, quantity, sellerName, sellerEmail,
        category, picture, rating, price, description } = truck
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='' src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h3>Price:<span> ${price}</span> </h3>
                <h3>Available Quantity: <span>{quantity}</span></h3>
                <p>Rating: <span>{rating}</span></p>
                <p>Rating: <span>{category}</span></p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SportsCars;