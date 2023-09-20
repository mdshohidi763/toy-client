import React, { useEffect, useState } from 'react';
import AllTable from './AllTable/AllTable';
import { Helmet } from 'react-helmet-async';

const Alltoys = () => {
  const [allData, setAllData] = useState([])


  useEffect(() => {
    fetch('https://toy-server-rose.vercel.app/allData')
      .then(res => res.json())
      .then(data => {
        setAllData(data)
      })
  }, [])
  return (
    <div className="overflow-x-auto my-5">

      <Helmet>
        <title>ToY LanD | All Toys</title>
      </Helmet>
      <h1 className='text-xl my-3 text-orange-700 underline'>Available Data: {allData.length}</h1>
      <table className="table table-xs">
        <thead>
          <tr className='bg bg-slate-400'>
            <th></th>
            <th className='text-xl text-white'>SELLER NAME</th>
            <th className='text-xl text-white'>TOY NAME</th>
            <th className='text-xl text-white'>SUB_CATEGORY</th>
            <th className='text-xl text-white'>PRICE</th>
            <th className='text-xl text-white'>AVAILABLE QUANTITY</th>
            <th></th>

          </tr>
        </thead>
        <tbody>
          {
            allData.map(data => <AllTable
              key={data._id}
              data={data}
            ></AllTable>)
          }

        </tbody>
      </table>
    </div>
  );
};

export default Alltoys;