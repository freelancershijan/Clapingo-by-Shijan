import React from 'react';
import './TrialSection.css'

const TrialSection = () => {
    return (
        <div className="hero">
            <div className=" md:grid md:grid-cols-2  items-center my-20">
                <div className='linearbg col-span-1'>
                    <div className='box1 flex'>
                        <h1 className='text-white text-3xl'>50K<span className='text-[#139980]'>+</span></h1>
                        <p className='text-xs text-white'>Mobile Downloads</p>
                    </div>
                    <div className='box2 flex'>
                        <h1 className='text-white text-3xl'>80K<span className='text-[#139980]'>+</span></h1>
                        <p className='text-xs text-white'>Happy Learners</p>
                    </div>
                    <div className='box3 flex'>
                        <h1 className='text-white text-3xl'>53K<span className='text-[#139980]'>+</span></h1>
                        <p className='text-xs text-white'>Sessions per month</p>
                    </div>
                    <div className='box4 flex'>
                        <h1 className='text-white text-3xl'>200K<span className='text-[#139980]'>+</span></h1>
                        <p className='text-xs text-white'>Speakers around the globe</p>
                    </div>
                </div>


                <div className='md:pr-40 col-span-1 mt-10 md:mt-0 px-5 md:px-0'>
                    <h3 className='text-[#139980]'>Book a trial</h3>
                    <h1 className="text-5xl font-bold">Start your English speaking journey today!</h1>
                    <p className=" my-8 pr-20">Practice english conversation with excellent communuicators
                        across the country and speak like a PRO 😎.</p>
                    <button className="btn border-none bg-[#FF736A] text-white rounded-3xl">Book a trial</button>
                </div>
            </div>
        </div>
    );
};

export default TrialSection;