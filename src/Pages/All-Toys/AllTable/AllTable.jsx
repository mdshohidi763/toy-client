import React from 'react';
import { Link } from 'react-router-dom';

const AllTable = ({data}) => {
    console.log(data);
    const {_id,sellerName,name,quantity,price,category}= data
    console.log(_id);
    return (
        
            <tr>
              <th></th> 
              <td className='text-purple-500 text-lg'>{sellerName}</td> 
              <td className='text-orange-600 text-lg'>{name}</td> 
              <td className='text-purple-500 text-lg'>{category}</td> 
              <td className='text-orange-600 text-lg'>{price}</td> 
              <td className='text-purple-500 text-lg'>{quantity}</td> 
              <div className=' p-3 '>
             
              <Link to={`/details/${_id}`} > <button className="btn btn-warning  btn-sm">View Details</button></Link>
              </div>
            </tr>
      
    );
};

export default AllTable;