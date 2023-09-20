import React from 'react';
import Swal from 'sweetalert2';
import {  useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const UpdateData = () => {
    // const [updateData , setUpdateData] = useState([])
    // const newData = useLoaderData();
    // console.log(newData);
    // const {_id,price,quantity,description}= newData;
    const {id}= useParams()
    console.log(id);

    const handleUpdateData = id =>{
      event.preventDefault();
      const form = event.target;
      const price = form.price.value;
      const quantity = form.quantity.value;
      const description = form.description.value;
      const updatedData = {
        price:price,quantity:quantity,description:description
      }
      console.log(updatedData)
      fetch(`https://toy-server-rose.vercel.app/allData/${id}`,{ 
        method:'PATCH',
        headers:{
         'content-type': 'application/json'
        },
        body:JSON.stringify(updatedData)
    })
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        if(data.modifiedCount > 0){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Updated Successfully',
                showConfirmButton: false,
                timer: 1500
              }) 
                form.reset()  
        }
    })
    }
    
    return (
        <div className='bg-[#F4F3F0] p-20'>
            <Helmet>
                <title>ToY LanD | Update Toy</title>
            </Helmet>
            <h2 className='text-3xl font-bold underline text-center my-4'>Update Toy</h2>
            <form onSubmit={()=> handleUpdateData(id)} >
                <div className='md:flex'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='price' className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2  ms-3">
                        <label className="label">
                            <span className="label-text">Available Quantity</span> 
                        </label>
                        <label className="input-group">

                            <input type="text" name='quantity' className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className='md:flex my-5'>
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='description' className="input input-bordered w-full" />
                        </label>
                    </div>
                   

                  
                </div>
              
                <input  className="btn btn-block btn-primary" type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateData;