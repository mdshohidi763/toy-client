import React from 'react';
import { Link } from 'react-router-dom';

const TableData = ({ single,handleDelete }) => {
    const {_id, price, quantity, description } = single
 return (


        // <tr className=' bg-base-200'>
        // <td><h2>{price}</h2></td>
        // <td>{quantity}</td>
        // <td>{description}</td>
        // </tr>
        <tr>

            <td>



                <div className="font-bold">{price}</div>



            </td>
            <td className=''>



                <div></div>



            </td>
            <td>



                <div  className='font-bold'>{quantity}</div>



            </td>
            <td className=''>



                <div></div>



            </td>
            <td className=''>



                <div  className='font-bold'>{description}</div>



            </td>
            <div className='flex justify-evenly p-3'>
            <Link to={`/update/${_id}`}><button  className="btn btn-outline btn-primary">Update</button></Link>
                <button onClick={()=> handleDelete (_id)} className="btn btn-outline btn-neutral ms-3">Delete</button>
               
            </div>
        </tr>

    );
};

export default TableData;