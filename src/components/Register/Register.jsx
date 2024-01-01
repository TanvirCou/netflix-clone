import { Link, useNavigate } from "react-router-dom";
import "./Register.css"
import { useRef, useState } from "react";
import axios from "axios";

const Register = () => {
const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleFinish = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/auth/register", { email, name, password });
      navigate("/login");
    } catch (err) {
        console.log(err);
    }
  };
    return (
        <div className="bg"> 
            <div>
                <div className="flex items-center justify-between px-40 py-6">
                <div className='cursor-pointer flex items-center'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" className='h-10'/>
                </div>
                <Link to="/login">
                <button className="bg-red-600 text-white font-medium py-1.5 px-3 rounded-md">Sign In</button>
                </Link>
                </div>
                <div className="text-white flex flex-col justify-center items-center pt-52">
                    <p className="text-5xl font-extrabold">Unlimited movies, TV shows, and more</p>
                    <p className="my-6 text-2xl ">Watch anywhere. Cancel anytime.</p>
                    <p className="text-xl mb-4">Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className="">
                        <div className="flex items-center">
                        <input type="email" onBlur={(e) => setEmail(e.target.value)} placeholder="Email address" className="w-[250px] h-[50px] bg-transparent border border-gray-400 px-2 rounded-sm text-white placeholder:text-gray-400"/>
                        <input type="text" onBlur={(e) => setName(e.target.value)} placeholder="Name" className="w-[250px] h-[50px]  ml-2  bg-transparent border border-gray-400 px-2 rounded-sm text-white placeholder:text-gray-400"/>
                        </div>
                        
                        <div className="flex items-center mt-2">
                        
                        <input type="password" onBlur={(e) => setPassword(e.target.value)} placeholder="Password" className="w-[250px] h-[50px] bg-transparent border border-gray-400 px-2 rounded-sm text-white placeholder:text-gray-400"/>
                        <button onClick={handleFinish} className="bg-red-600 text-2xl font-medium w-[250px] ml-2 py-2.5 rounded-md mx-2">Get Finished</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;