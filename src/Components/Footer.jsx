const Footer = () => {
    return (
        <div className="bg-black relative mt-96">
            {/* first part */}
           <div className="">
                <div
                className="border-2 border-white  absolute inset-x-0  bg-cover bg-no-repeat rounded-3xl h-80 w-11/12 mx-auto bg-[#252323] transform -translate-y-1/2"
                style={{
                    backgroundImage: "url('https://i.ibb.co/wS8y9KC/bg-shadow.png')",
                }}
                ></div>
           </div>

            {/* second part */}
            <div className="py-11 md:pt-52 w-11/12 mx-auto mt-44 relative z-10">

                <div className="flex justify-center mb-16">
                    <div
                        className="w-40 h-36"
                        style={{
                            backgroundImage: "url('https://i.ibb.co/H7wTKqd/logo-footer.png')",
                        }}
                    ></div>
                </div>

                <div className="bg-black text-white flex justify-between px-3">
                    <div>
                        <h2 className="text-lg font-semibold mb-3">About Us</h2>
                        <p className="text-gray-400">We are a passionate team <br />
                            dedicated to providing the best <br />
                            services to our customers.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
                        <ul>
                            <li className="mb-2 text-gray-400">Home</li>
                            <li className="mb-2 text-gray-400">Services</li>
                            <li className="mb-2 text-gray-400">About</li>
                            <li className="mb-2 text-gray-400">Contact</li>
                        </ul>
                    </div>

                    <form>
                        <h6 className="text-lg font-semibold mb-3">Subscribe</h6>
                        <p className="text-gray-400 mb-2">Subscribe to our newsletter for the <br />
                            latest updates.
                        </p>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="input input-bordered join-item"
                            />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>

            <hr className="bg-gray-600" />

            <span>
                <p className="text-gray-400 text-xl text-center py-5">
                    @2024 Your Company All Rights Reserved.
                </p>
            </span>
        </div>
    );
};

export default Footer;
