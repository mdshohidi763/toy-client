import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Truck from './Truck/Truck';
import SportsCars from './SportsCars/SportsCars';
import Sedans from './Sedans/Sedans';


const Category = () => {
    const [data, setToys] = useState([]);
    useEffect(() => {
        fetch('https://toy-server-rose.vercel.app/allData?category=Trucks', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, []);
    const handleCategory = event => {
        const category = event.target.innerText;
        console.log(category);
        fetch(`https://toy-server-rose.vercel.app/allData?category=${category?.category}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }
    return (
        <Tabs className='lg:my-12 my-5'>
            <TabList onClick={handleCategory}>
                <Tab>Trucks</Tab>
                <Tab>Sports Cars</Tab>
                <Tab>Sedans</Tab>
            </TabList>

            <TabPanel className='mt-7'>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-8 lg:gap-5'>
                    {
                        data.map(truck =><Truck
                        
                        key={truck._id}
                        truck={truck}></Truck>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid lg:grid-cols-4 grid-cols-1 gap-5'>
                    {
                        data.map(truck => <SportsCars
                            key={truck._id}
                            truck={truck}
                        ></SportsCars>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid lg:grid-cols-4 grid-cols-1 gap-5'>
                    {
                        data.map(truck => <Sedans
                            key={truck._id}
                            truck={truck}></Sedans> )
                    }
                </div>
            </TabPanel>
        </Tabs>

        // <Tabs className="my-5" defaultIndex={tab} onSelect={(index) => setTab(index)}>
        //     <TabList>
        //         <Tab>Truck</Tab>
        //         <Tab>Sports Cars</Tab>
        //         <Tab>Sedans</Tab>
        //     </TabList>
        //     <TabPanel>
        //         <div className='grid md:grid-cols-3 lg:grid-cols-3 gap-3'>
        //             {
        //                 truck.map(item => <Truck

        //                     item={item}></Truck>)
        //             }
        //         </div>
        //     </TabPanel>

        //     <TabPanel>
        //         <div className='grid md:grid-cols-3 lg:grid-cols-3 gap-3'>
        //             {
        //                 sportsCar.map(car => <SportsCars

        //                     car={car}

        //                 >

        //                 </SportsCars>)
        //             }
        //         </div>
        //     </TabPanel>
        //     <TabPanel>
        //     <div className='grid md:grid-cols-3 lg:grid-cols-3 gap-3'>
        //             {
        //             sedans.map(sedan => <Sedans
        //                 sedan={sedan}
        //             >

        //             </Sedans>)
        //             }
        //         </div>
        //     </TabPanel>
        // </Tabs>
    );
};

export default Category;