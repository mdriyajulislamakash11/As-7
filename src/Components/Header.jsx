
import PropTypes from 'prop-types';
import logo from '../assets/logo.png';
import coin from '../assets/coin.png';

const Header = ({ points,  count }) => { 
    return (
        <div className="sticky top-0 z-50 backdrop-blur-lg bg-white/50">
            <div className='flex justify-between items-center w-11/12 mx-auto py-7'>
                <img className='w-14' src={logo} alt="logo image" />

                <div className='flex items-center text-lg font-bold'>
                    <div className=''>
                        <ul className='md:flex list-none'>
                            <li className='mr-12'><a href="#">Home</a></li>
                            <li className='mr-12'><a href="#">Fixture</a></li>
                            <li className='mr-12'><a href="#">Teams</a></li>
                            <li className='mr-12'><a href="#">Schedules</a></li>
                        </ul>
                    </div>

                    <span className='flex items-center gap-3 btn md:mr-5'>
                        <button className='text-lg font-bold'>{ count} Coin</button> 
                        <img src={coin} alt="coin" />
                    </span>
                </div>
            </div>
        </div>
    );
};

Header.propTypes = {
    points: PropTypes.number.isRequired 
};

export default Header;
