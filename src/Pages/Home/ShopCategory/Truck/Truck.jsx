import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
// import { Rating } from 'react-rating'
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Truck = ({ truck }) => {
    
    const {_id,name, quantity, sellerName, sellerEmail,
        category, picture, rating, price, description } = truck



   
    return (
        <div className="card w-96 bg-base-100 shadow-2xl">
            <figure><img className='' src={picture} alt="Shoes" /></figure>
            <div className="card-body bg-slate-200">
                <h2 className="card-title font-bold text-2xl text-orange-700">{name}</h2>
                <h2 className='font-bold text-lg text-orange-600'>Price:<span> ${price}</span> </h2>
                {/* <h3 className='font-bold text-orange-500'>Available Quantity: <span>{quantity}</span></h3> */}
                <h3 className='font-bold text-orange-500'>Category: <span>{category}</span></h3>
                
                <div className='flex mr-3'>
                    
                    <div>
                    <h3 className='font-bold text-orange-500'>Rating: <span>{rating}</span></h3>
                    </div>
                    <div>
                    <Rating
                            style={{ maxWidth: 95 }}
                            value={rating}
                            readOnly
                        />
                    </div>
                    </div>
                <div className="card-actions justify-center ">
                    <Link to={`/details/${_id}`}><button className="btn btn-primary w-full rounded-xl " >View Details</button></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Truck;