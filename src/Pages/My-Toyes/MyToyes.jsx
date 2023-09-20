import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import TableData from './TableData/TableData';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
// import { Helmet } from "react-helmet-async";


const MyToyes = () => {




    const { user } = useContext(AuthContext)
    const [myData, setMyData] = useState([]);
    const [ascend, setAscend] = useState(true);


    useEffect(() => {
        fetch(`https://toy-server-rose.vercel.app/allData?sort,sellerEmail=${user?.email,ascend?'ascend':'descend'}`)
            .then(res => res.json())
            .then(data => {
                setMyData(data)
            })
    }, [])

    // const url = `https://toy-server-rose.vercel.app/allData?sellerEmail=${user?.email}`
    // useEffect(() => {
    //     fetch(`https://toy-server-rose.vercel.app/allData?sort=${ascend?'ascend':'descend'}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setMyData(data)
    //         })
    // }, [ascend])

    const handleDelete = id => {
        const proceed = ('Are you want to delete it?')
        if (proceed) {
            fetch(`https://toy-server-rose.vercel.app/allData/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Delete Successful',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        const remaing = myData.filter(myData => myData._id !== id);
                        setMyData(remaing)
                    }
                })
        }
    }

    return (

        <div className="overflow-x-auto">
            <Helmet>
                <title>ToY LanD | My Toys</title>
            </Helmet>
            <div><h1 className='text-xl my-3 text-orange-700 underline'>Available Data: {myData.length}</h1>
                <button onClick={() => setAscend(!ascend)} className="btn-primary">{ascend ? 'price: High to Low' : 'Low to High'}</button>
            </div>
            <table className="table ">
                {/* head */}
                <thead className='w-3/4 bg bg-yellow-400' >
                    <tr>

                        <th className='font-extrabold text-lg'>PRICE</th>
        //             <th className='font-extrabold text-lg'>AVAILABLE QUANTITY</th>
        //             <th className='font-extrabold text-lg'>DETAILS</th>
                        <th className='font-extrabold text-lg'></th>
                    </tr>
                </thead>
                <tbody className='w-3/4 bg bg-yellow-100'>
                    {
                        myData.map(single => <TableData
                            key={single._id}
                            single={single}

                            handleDelete={handleDelete}
                        ></TableData>)
                    }
                </tbody>


            </table>
        </div>

        // <table className="table">
        //     {/* head */}
        //     <thead>
        //         <tr>
        //             <th>PRICE</th>
        //             <th>AVAILABLE QUANTITY</th>
        //             <th>DETAILS</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {/* row 1 */}

        //      <tr>
        //      {
        //             myData.map(single => <TableData
        //                 key={single._id}
        //                 single={single}
        //             ></TableData>)
        //         }

        //      </tr>
        //     </tbody>
        // </table>

    );
};

export default MyToyes;