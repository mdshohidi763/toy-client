import React from 'react';
import { AiOutlineWechat } from 'react-icons/ai';
import { BsFillBoxSeamFill } from 'react-icons/bs';
import { RiVisaFill } from 'react-icons/ri';
import { FaShippingFast } from 'react-icons/fa';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Flash from "react-awesome-reveal";

const ExtraBanner = () => {
    return (
        <div>
            <Flash>
            <div className="lg:flex ps-14 mx-auto justify-around mt-4 lg:mt-10  py-20 pt-28 lg:rounded-3xl">
                <div className="flex mb-8">
                    <div>
                        <h1 className='text-6xl text-[#FCE2AD] px-3'><AiOutlineWechat></AiOutlineWechat></h1>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">SUPPORT 24/7</h1>
                        <p className="font-semibold">Delicated 24/7 Support</p>
                    </div>

                </div>
                <div className="flex mb-8">
                    <div><h1 className='px-3 text-[#FCE2AD] text-5xl'><BsFillBoxSeamFill></BsFillBoxSeamFill></h1></div>
                    <div>
                        <h1 className="text-xl font-bold">
                            EASY RETURNS
                        </h1>
                        <p className="font-semibold">Shop With Confidence</p>
                    </div>

                </div>
                <div className="flex mb-8">
                    <div><h1 className='px-3 text-[#FCE2AD] text-6xl'><RiVisaFill></RiVisaFill></h1></div>
                    <div><h1 className="text-xl font-bold">CARD PAYMENT</h1>
                        <p className="font-semibold">12 Months Installments</p>
                    </div>

                </div>
                <div className="flex mb-8">
                    <div><h1 className='px-3 text-[#FCE2AD] text-6xl'><FaShippingFast></FaShippingFast></h1></div>
                    <div><h1 className="text-xl font-bold">FREE SHIPPING</h1>
                        <p className="font-semibold">Capped at $50 per order</p>
                    </div>
                </div>
            </div>
            </Flash>
        </div>
    );
};

export default ExtraBanner;