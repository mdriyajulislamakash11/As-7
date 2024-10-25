const Details = ({ players, removePlayer, handleActiveBtn }) => {
    if (players.length === 0) {
        return <div>No players selected</div>;
    }

    return (
        <div className="grid grid-cols-1 gap-4">
            {players.map(player => (
                <div key={player.id} className="border-2 mt-4">
                    <div className="card bg-base-100 shadow-xl p-4 ">
                        <span className="flex justify-between items-center">
                        <div>
                            <h2 className="text-2xl font-bold">{player.name}</h2>
                            <p className="text-lg">Country: {player.country}</p>
                        </div>
                        <div>
                            <button 
                                className="btn btn-outline" 
                                onClick={() => removePlayer(player.id)} 
                            >
                                Remove
                            </button>
                        </div>
                        </span>
                    </div>
                </div>
            ))}
            <button 
                className="btn bg-[#E7FE29] mt-4 w-36 text-lg font-bold" 
                onClick={() => handleActiveBtn('cart')} 
            >
                Go to Home
            </button>
        </div>
    );
};

export default Details;
