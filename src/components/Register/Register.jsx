import "./Register.css"

const Register = () => {
    return (
        <div className="bg"> 
            <div>
                <div className="flex items-center justify-between px-40 py-6">
                <div className='cursor-pointer flex items-center'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" className='h-10'/>
                </div>
                <button className="bg-red-600 text-white font-medium py-1.5 px-3 rounded-md">Sign In</button>
                </div>
                <div className="text-white flex flex-col justify-center items-center pt-52">
                    <p className="text-5xl font-extrabold">Unlimited movies, TV shows, and more</p>
                    <p className="my-6 text-2xl ">Watch anywhere. Cancel anytime.</p>
                    <p className="text-xl mb-4">Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className="">
                        <input type="text" placeholder="Email address" className="w-[380px] h-[50px] bg-transparent border border-gray-400 px-2 rounded-sm text-white placeholder:text-gray-400"/>
                        <button className="bg-red-600 text-2xl font-medium px-6 py-2.5 rounded-md mx-2">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;