
import logo from '../assets/logo.png'
import coin from '../assets/coin.png'

const Header = () => {
    return (
        <div>
            <div className='flex justify-between items-center w-11/12 mx-auto mt-16'>
            <img className='w-14' src={logo} alt="logo image" />

            <div className='flex items-center'>
                <div className=''>
                <ul className='md:flex list-none '>
                    <li className='mr-12 '><a href="#">Home</a></li>
                    <li className='mr-12 '><a href="#">Fixture</a></li>
                    <li className='mr-12 '><a href="#">Teams</a></li>
                    <li className='mr-12 '><a href="#">Schedules</a></li>
                </ul>
                </div>

                <span className='flex items-center gap-3 btn md:mr-14'>
                    <button className=' font-semibold'>0 Coin</button>
                    <img src={coin} alt="" />
                </span>
            </div>

        </div>
        </div>
    );
};

export default Header;