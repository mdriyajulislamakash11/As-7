// import React from 'react';
// import logo from '../assets/logo.png';
// import coin from '../assets/coin.png';

// const Header = ({ count }) => {
//     return (
//         <div>
//             <div className='flex justify-between items-center w-11/12 mx-auto mt-16'>
//                 <img className='w-14' src={logo} alt="logo image" />

//                 <div className='flex items-center'>
//                     <div className=''>
//                         <ul className='md:flex list-none'>
//                             <li className='mr-12'><a href="#">Home</a></li>
//                             <li className='mr-12'><a href="#">Fixture</a></li>
//                             <li className='mr-12'><a href="#">Teams</a></li>
//                             <li className='mr-12'><a href="#">Schedules</a></li>
//                         </ul>
//                     </div>

//                     <span className='flex items-center gap-3 btn md:mr-14'>
//                         <button className='font-semibold'>{count} Coin</button>
//                         <img src={coin} alt="" />
//                     </span>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Header;
// // 

import PropTypes from 'prop-types';
import logo from '../assets/logo.png';
import coin from '../assets/coin.png';

const Header = ({ points,  count }) => { // পয়েন্ট প্রপস গ্রহণ
    return (
        <div>
            <div className='flex justify-between items-center w-11/12 mx-auto mt-16'>
                <img className='w-14' src={logo} alt="logo image" />

                <div className='flex items-center'>
                    <div className=''>
                        <ul className='md:flex list-none'>
                            <li className='mr-12'><a href="#">Home</a></li>
                            <li className='mr-12'><a href="#">Fixture</a></li>
                            <li className='mr-12'><a href="#">Teams</a></li>
                            <li className='mr-12'><a href="#">Schedules</a></li>
                        </ul>
                    </div>

                    <span className='flex items-center gap-3 btn md:mr-14'>
                        <button className='font-semibold'>{ count} Coin</button> {/* পয়েন্ট প্রদর্শন */}
                        <img src={coin} alt="coin" />
                    </span>
                </div>
            </div>
        </div>
    );
};

Header.propTypes = {
    points: PropTypes.number.isRequired // পয়েন্ট প্রপসের টাইপ
};

export default Header;
