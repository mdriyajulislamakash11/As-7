import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Player from './Player';
import Details from './Details';

const Main = ({ handleActiveBtn, isActive }) => {
    const [cards, setCards] = useState([]);

    
    useEffect(() => {
        fetch('.././public/Player.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, []);

    return (
        <div className="w-11/12 mx-auto border my-20">
           
            <div className="flex justify-between">
            <h1 className='text-2xl font-extrabold'>{`${isActive.cart ? "Available Players" : `Selected Player(0/6)`}`}</h1>
                <div>
                    <button
                        onClick={() => handleActiveBtn('cart')}
                        className={`${isActive.cart ? "bg-[#E7FE29]" : ""} btn rounded mr-4 text-xl font-bold`}>
                        Available
                    </button>

                    <button
                        onClick={() => handleActiveBtn('about')}
                        className={`${isActive.cart ? "" : "bg-[#E7FE29]"} btn rounded mr-4 text-xl font-bold`}>
                        Selected (0)
                    </button>
                </div>
            </div>

            {/* togglle button */}
            {
                isActive.cart
                    ? (
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {cards.map(card => (
                                <Player
                                    key={card.id}
                                    card={card} />
                            ))}
                        </div>
                    )
                    : (
                        
                        <Details />
                    )
            }
        </div>
    );
};

Main.propTypes = {
    handleActiveBtn: PropTypes.func.isRequired,
    isActive: PropTypes.object
}

export default Main;
