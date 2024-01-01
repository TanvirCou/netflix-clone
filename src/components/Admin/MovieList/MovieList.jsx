import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/UserProvider";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";


const MovieList = () => {
    // const [movies, setMovies] = useState([]);
    const {allMovies, setAllMovies} = useContext(UserContext);

    const handleClick = async(id) => {
        setAllMovies(allMovies.filter(d => d._id !== id));
            try {
                await axios.delete(`http://localhost:3000/api/movie/${id}`, {
                    headers: {
                        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NThlYTUxYTE5NjhiZDMwZWVlM2MxZjEiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MDM4NDcyOTYsImV4cCI6MTcwNDI3OTI5Nn0.Yz3yJlixi41lvZjomRZPq_6ldQMH8msFnV_0-eDRiWM"
                    }
                });
            } catch(err) {
                console.log(err);
            }
        };

    useEffect(() => {
        const getMovies = async() => {
            try {
            const res = await axios.get("http://localhost:3000/api/movie", {
                headers: {
                    authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NThlYTUxYTE5NjhiZDMwZWVlM2MxZjEiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MDM4NDcyOTYsImV4cCI6MTcwNDI3OTI5Nn0.Yz3yJlixi41lvZjomRZPq_6ldQMH8msFnV_0-eDRiWM"
                }
            });
            setAllMovies(res.data);
            } catch(err) {
                console.log(err);
            }
        };
        getMovies();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="flex">
                <div className="w-1/5">
                    <Sidebar />
                </div>
                <div className="w-4/5 pt-20 px-4">
            <div className="overflow-x-auto ">
                <table className="table">
                    <thead>
                        <tr className='text-[14px] text-black'>
                            <th>Id</th>
                            <th>Movie</th>
                            <th>Genre</th>
                            <th>Limit</th>
                            <th>isSeries</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allMovies.map((movie, index) => (
                            <tr key={movie._id}>
                                <th>{index + 1}</th>
                                <td className='flex items-center'>
                                    <img src={movie?.titleImg} className="w-9 h-9 rounded-[50%] object-cover" />
                                    <p className='pl-2'>{movie.title}</p>
                                </td>
                                <td className='text-gray-500'>{movie.genre}</td>
                                <td className='text-gray-500'>{movie.limit}</td>
                                <td className='text-gray-500'>{movie.isSeries === false ? "Movie": "Series"}</td>
                                <td className=''>
                                    <div className='flex'>
                                        <Link to={`/movie/${movie._id}`} state={{state: movie}}>
                                            <button className='bg-green-500 text-white py-1 px-2 rounded-md'>Edit</button>
                                        </Link>
                                        <div className='text-2xl text-red-600 flex items-center pl-1 cursor-pointer' onClick={() => handleClick(movie._id)}>
                                            <ion-icon name="trash-sharp"></ion-icon>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </div>
            </div>
        </div>
    );
};

export default MovieList;