import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Player from './Player';
import Details from './Details';

const Main = ({ handleActiveBtn, isActive }) => {
    const [cards, setCards] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    useEffect(() => {
        fetch('.././public/Player.json')
            .then(res => res.json())
            .then(data => setCards(data));
    }, []);

    const handleChoosePlayer = (player) => {
        if (selectedPlayers.some(selected => selected.id === player.id)) {
            alert(`${player.name} is already selected!`);
        } else if (selectedPlayers.length < 6) {
            setSelectedPlayers(prev => [...prev, player]);
            alert(`${player.name} has been added to your selection!`); 
        } else {
            alert("You can only select up to 6 players."); 
        }
    };

    const removePlayer = (playerId) => {
        setSelectedPlayers(prev => prev.filter(player => player.id !== playerId)); 
    };

    return (
        <div className="w-11/12 mx-auto border my-20">
            <div className="flex justify-between ">
                <h1 className='text-2xl font-extrabold'>{`${isActive.cart ? "Available Players" : `Selected Player(${selectedPlayers.length}/6)`}`}</h1>
                <div className="">
                    <button
                        onClick={() => handleActiveBtn('cart')}
                        className={`${isActive.cart ? "bg-[#E7FE29]" : ""} btn rounded  text-xl font-bold`}>
                        Available
                    </button>
                    <button
                        onClick={() => handleActiveBtn('about')}
                        className={`${isActive.cart ? "" : "bg-[#E7FE29]"} btn rounded  text-xl font-bold`}>
                        Selected ({selectedPlayers.length})
                    </button>
                </div>
            </div>

            {/* Toggle button */}
            {
                isActive.cart
                    ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {cards.map(card => (
                                <Player
                                    key={card.id}
                                    card={card}
                                    onChoosePlayer={handleChoosePlayer}
                                />
                            ))}
                        </div>
                    )
                    : (
                        <Details 
                            players={selectedPlayers} 
                            removePlayer={removePlayer} 
                            handleActiveBtn={handleActiveBtn} 
                        />
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
