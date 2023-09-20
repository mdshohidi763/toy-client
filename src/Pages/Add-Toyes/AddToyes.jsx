import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';



const AddToyes = () => {
    const { user } = useContext(AuthContext)


    const [category, setCategory] = useState([])

    const toyCategory = [
        "Trucks",
        "SportsCar",
        "Sedans",
        "Tesla",

    ]

    const handleSubCategory = event => {
        console.log(event.target.value);
        setCategory(event.target.value);
    }

    const handleForm = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.toyName.value;
        const quantity = form.availableQuantity.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = user?.email;
        const category = form.toyCategory.value;
        const picture = form.imgUrl.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const description = form.details.value;
        const toyData = {
            name: name, quantity: quantity, sellerName: sellerName, sellerEmail: sellerEmail,
            category: category, picture: picture, rating: rating, price: price, description: description
        }
        console.log(toyData);
        fetch('https://toy-server-rose.vercel.app/allData', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toyData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Added Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                form.reset()
            })
    }

    return (
        // <div className="p-3 bg-light">

        //     <form class="row g-3" onClick={handleForm}>
        //         <div className="join">
        //             <input className="input input-bordered join-item" placeholder="Email" />

        //         </div>
        //         <div class="col-md-6">
        //             <label for="inputEmail4" class="form-label">
        //                 Toy Name
        //             </label>
        //             <input type="text" name="toyName" class="form-control" id="inputEmail4" />
        //         </div>
        //         <div class="col-md-6">
        //             <label for="inputEmail4" class="form-label">
        //                 Available Quantity
        //             </label>
        //             <input type="text" name="availableQuantity" class="form-control" id="inputEmail4" />
        //         </div>

        //         <div class="col-md-6">
        //             <label for="inputEmail4" class="form-label">
        //                 Seller Name
        //             </label>
        //             <input type="text" name="sellerName" class="form-control" id="inputEmail4" />
        //         </div>

        //         <div class="col-md-6">
        //             <label for="inputEmail4" class="form-label">
        //                 Seller Email
        //             </label>
        //             <input type="text" name="sellerEmail" class="form-control" id="inputEmail4" />
        //         </div>




        //         <div class="col-md-6">
        //             <label for="inputEmail4" class="form-label">
        //                 Picture URL of the toy
        //             </label>
        //             <input type="url" name="imgUrl" class="form-control" id="inputEmail4" />
        //         </div>
        //         <div class="col-md-6">
        //             <label for="inputEmail4" class="form-label">
        //                 Rating
        //             </label>
        //             <input type="text" name="rating" class="form-control" id="inputEmail4" />
        //         </div>

        //         <div class="col-md-6">
        //             <label for="inputEmail4" class="form-label">
        //                 Price
        //             </label>
        //             <input type="text" name="price" class="form-control" id="inputEmail4" />
        //         </div>

        //         <div class="col-md-6">
        //             <label for="inputEmail4" class="form-label">
        //                 Details
        //             </label>
        //             <input type="text" name="details" class="form-control" id="inputEmail4" />
        //         </div>

        //         <input className="btn btn-primary" type="submit" value="Update" />
        //     </form>
        // </div>

        <div className='bg-[#F4F3F0] p-20'>
            <Helmet>
                 <title>ToY LanD | Add Toys</title>
            </Helmet>
            <h2 className='text-3xl font-bold text-center my-4 underline'>Add Toys</h2>
            <form onSubmit={handleForm}>
                <div className='md:flex'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='toyName' className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2  md:ms-3">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='availableQuantity' className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className='md:flex'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='sellerName' className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full md:ms-3 md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='price' className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>


                <div className='md:flex'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='rating' className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2  md:ms-3">
                        <label className="label">
                            <span className="label-text">Photo URL of the Toy</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='imgUrl' className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className='md:flex'>


                    <div className="form-control   w-full">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='details' className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="form-control md:w-full">
                    <label className="label">
                        <span className="label-text">Sub Category</span>
                    </label>
                    <select name="toyCategory"
                        value={category}
                        onChange={handleSubCategory}
                        id="">
                        {
                            toyCategory.map((option) => (
                                <option key={option}> {option} </option>
                            ))
                        }
                    </select>
                </div>
                <input type="submit" value="Add Now" className='btn btn-block btn-outline btn-primary mt-2' />

            </form>

        </div>

    );
};

export default AddToyes;