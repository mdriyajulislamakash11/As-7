const Details = ({ players, removePlayer, handleActiveBtn }) => {

    console.log(players)

    if (players.length === 0) {
        return <div>No players selected</div>;
    }

    return (
        <div className="grid grid-cols-1 gap-4">
            {players.map(player => (
                <div key={player.id} className="border-2 mt-4">
                    <div className="card bg-base-100 shadow-xl p-4 ">
                        <span className="flex justify-between items-center">
                            <div className="flex">
                                <img className="w-28 mr-5 h-16 rounded" src={player.img} alt="" />
                                <div>
                                    <h2 className="text-2xl font-bold">{player.name}</h2>
                                    <p className="text-lg">Country: {player.country}</p>
                                </div>
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
                className="btn bg-[#E7FE29] mt-4 w-44 font-extrabold text-[16px]"
                onClick={() => handleActiveBtn('cart')}
            >
                Add More Player
            </button>
        </div>
    );
};

export default Details;
