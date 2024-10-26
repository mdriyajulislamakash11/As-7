import  '../App.css'


const Player = ({ card, onChoosePlayer }) => {
    const { name, price, country, battingHand, rating, img } = card;

    return (
        <div className="border-2 mt-4 sora">
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={img}
                        alt={name}
                        className="rounded-xl w-full h-60 object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-lg font-extrabold mb-3">
                        <i className="fa-solid fa-user-large text-2xl mr-4"></i> {name}
                    </h2>
                    <div className="flex items-center">
                        <p><i className="fa-brands fa-font-awesome text-lg mr-4"></i> {country}</p>
                        <button className="btn font-bold text-lg">All-Rounder</button>
                    </div>
                    <p className="font-extrabold">{rating}</p>
                    <div className="flex items-center">
                        <p className="text-lg font-bold">Left-Hand-Bat</p>
                        <p className="my-4 text-right">{battingHand}</p>
                    </div>
                    <div className="card-actions flex items-center mt-2">
                        <p className="text-lg font-bold">Price: {price}</p>
                        <button
                            onClick={() => onChoosePlayer(card)}
                            className="btn text-lg font-bold">
                            Choose Player
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;
