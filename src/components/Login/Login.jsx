import "./Login.css";

const Login = () => {
    return (
        <div className='bg-login'>
            <div>
                <div className="flex items-center px-20 py-6"> 
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" className='h-12'/>   
                </div>
                <div className="text-white flex justify-center">
                <form action="" className="w-[450px] h-[480px] bg-black rounded-md flex flex-col justify-around py-2 px-8">
                    <p className="text-3xl">Sign up</p>
                    <input type="email" name="" placeholder="Email address" className="w-full h-10 bg-[#333333] text-[#8c8c8c] px-2 text-sm rounded-md"/>
                    <input type="email" name="" placeholder="Email address" className="w-full h-10 bg-[#333333] text-[#8c8c8c] px-2 text-sm rounded-md"/>
                    <button className="bg-red-600 w-full py-2 rounded-md font-medium">Sign Up</button>
                    <p className="text-[#8c8c8c]">New to Netflix? <b className="text-white">Sign up now.</b></p>
                    <small className="text-[#8c8c8c]">
                        This page is protected by Google reCAPTCHA to ensure you're not a
                        bot. <b className="text-blue-600">Learn more</b>.
                    </small>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Login;