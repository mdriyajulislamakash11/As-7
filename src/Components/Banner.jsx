import React from 'react';
import banner from '../assets/banner-main.png';

const Banner = ({count, loadMony}) => {

    console.log(loadMony)
    
    return (
        <div className="w-11/12 mx-auto mt-4">
            <div
                className="bg-cover bg-no-repeat rounded-3xl md:w-full h-full md:h-[35.5rem] mb-10 bg-[#252323]"
                style={{
                    backgroundImage: "url('https://i.ibb.co.com/wS8y9KC/bg-shadow.png')",
                }}
            >
                <div className="w-9/12 mx-auto flex flex-col justify-center items-center text-center h-full space-y-6 py-4">
                    <img src={banner} alt="banner" />
                    <h1 className="md:text-5xl text-3xl font-bold text-white mb-4">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className="text-2xl font-medium text-white mb-6">Beyond Boundaries Beyond Limits</p>
                    <span className="border-2 border-[#E7FE29] rounded-xl">
                        <button
                            className="btn bg-[#E7FE29] m-1 font-bold text-5"
                            onClick={() => loadMony(count)}
                        >
                            Claim Free Credit
                        </button>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Banner;
