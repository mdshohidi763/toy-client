import React from 'react';
import pic1 from '../../../assets/photo-1456082902841-3335005c3082.avif'
import pic2 from '../../../assets/photo-1508896694512-1eade558679c.avif'
import pic3 from '../../../assets/img1 (3).jpg'
import pic4 from '../../../assets/img1 (4).jpg'
import pic5 from '../../../assets/img1 (5).jpg'
import pic6 from '../../../assets/img1 (6).jpg'
import pic7 from '../../../assets/img1 (7).jpg'
import pic8 from '../../../assets/img1 (8).jpg'
import pic9 from '../../../assets/img9 (1).avif'
import pic10 from '../../../assets/img10.avif'
import pic11 from '../../../assets/img11.avif'
import pic12 from '../../../assets/img12.avif'
const Gallary = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3 mb-5 lg:mt-10 w-96 mx-auto lg:w-full">
            <div className="grid gap-4">
                <div>
                    <img data-aos="zoom-out" className="h-auto max-w-full rounded-lg" src={pic1} />
                </div>
                <div>
                    <img data-aos="zoom-out" className="h-auto max-w-full rounded-lg" src={pic2} />
                </div>
                <div>
                    <img data-aos="zoom-out" className="h-auto max-w-full rounded-lg" src={pic3} />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img data-aos="zoom-out" className="h-auto max-w-full rounded-lg" src={pic4} />
                </div>
                <div>
                    <img data-aos="zoom-out" className="h-auto max-w-full rounded-lg" src={pic5} />
                </div>
                <div>
                    <img data-aos="zoom-out" className="h-auto max-w-full rounded-lg" src={pic6} />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img data-aos="zoom-out" className="h-auto max-w-full rounded-lg" src={pic7} />
                </div>
                <div>
                    <img data-aos="zoom-out" className="h-auto max-w-full rounded-lg" src={pic8} />
                </div>
                <div>
                    <img data-aos="zoom-out" className="h-auto max-w-full rounded-lg" src={pic9} />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img data-aos="zoom-out" className="h-auto max-w-full rounded-lg" src={pic10} />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={pic11} />
                </div>
                <div>
                    <img data-aos="zoom-out" className="h-auto max-w-full rounded-lg" src={pic12} />
                </div>
            </div>
            </div>
            );
};

            export default Gallary;