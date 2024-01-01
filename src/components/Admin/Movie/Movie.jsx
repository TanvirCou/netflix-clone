import { Link, useLocation, useParams } from 'react-router-dom';
import { useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase";
import axios from "axios";
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const Movie = () => {
    const { id } = useParams();
    const location = useLocation();
    const state = location.state.state;

    const [movieDetails, setMovieDetails] = useState({});
    const [titleImg, setTitleImg] = useState(null);
    const [smImg, setSmImg] = useState(null);
    const [coverImg, setCoverImg] = useState(null);
    const [trailer, setTrailer] = useState(null);
    const [video, setVideo] = useState(null);
    const [uploaded, setUploaded] = useState(0);

    const handleBlur = (e) => {
        const value = e.target.value;
        setMovieDetails({ ...movieDetails, [e.target.name]: value });
    };

    const upload = (items) => {
        items.forEach(item => {
            const fileName = new Date().getTime() + item.file?.name;
            const storageRef = ref(storage, `item/${fileName}`);
            const uploadTask = uploadBytesResumable(storageRef, item.file);

            uploadTask.on('state_changed',
             (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
            },
            (err) => {console.log(err)},
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                  console.log('File available at', downloadURL);
                  setMovieDetails((prev) => {
                    return {...prev, [item.label]: downloadURL}
                  });
                  setUploaded((prev) => prev + 1);
                });
              }
            );
        });
    };

    const handleUpload = (e) => {
        e.preventDefault();
        upload([
            {file: titleImg, label: "titleImg"},
            {file: smImg, label: "smImg"},
            {file: coverImg, label: "coverImg"},
            {file: trailer, label: "trailer"},
            {file: video, label: "video"},
        ])
    };

    const handleUpdate = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`http://localhost:3000/api/movie/${id}`, movieDetails, {
                headers: {
                    authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NThlYTUxYTE5NjhiZDMwZWVlM2MxZjEiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MDM4NDcyOTYsImV4cCI6MTcwNDI3OTI5Nn0.Yz3yJlixi41lvZjomRZPq_6ldQMH8msFnV_0-eDRiWM"
                }
            });
            console.log(res.data);
        } catch(err) {
            console.log(err);
        }
    }
    return (
        <div>
            <Navbar />
            <div className="flex">
                <div className="w-1/5">
                    <Sidebar />
                </div>
                <div className="w-4/5 pt-16 pb-6">
            <div className='flex items-center px-6 py-4 justify-between'>
                <p className='text-2xl font-bold'>Movie</p>
                <Link to="/admin/newMovie">
                    <button className='bg-teal-600 text-white px-3 py-1 rounded-md font-medium'>Create</button>
                </Link>
            </div>

            <div className='w-full flex px-4'>
                <div className='w-full py-4 px-6 shadow-md border rounded-md mx-2'>
                    <div className="flex items-center py-1">
                        <img src={state?.titleImg} className="w-12 h-12 rounded-[50%] object-cover" />
                        <p className="font-medium px-3">{state.title}</p>
                    </div>

                    <div className='flex items-center px-1 py-1'>
                        <p className="text-sm font-medium">Id:</p>
                        <p className='text-sm font-medium text-gray-500 px-3'>{state._id}</p>
                    </div>

                    <div className='flex items-center p-1 '>
                        <p className="text-sm font-medium">Genre:</p>
                        <p className='text-sm font-medium text-gray-500 px-3'>{state.genre}</p>
                    </div>

                    <div className='flex items-center p-1'>
                        <p className="text-sm font-medium">Year:</p>
                        <p className='text-sm font-medium text-gray-500 px-3'>{state.year}</p>
                    </div>

                    <div className='flex items-center p-1'>
                        <p className="text-sm font-medium">Limit:</p>
                        <p className='text-sm font-medium text-gray-500 px-3'>+{state.limit}</p>
                    </div>
                </div>
            </div>

            <div className=' border shadow-md rounded p-4 my-3 mx-6'>
                <p className='text-xl font-bold'>Edit</p>
                <div className='flex justify-between'>
                    <div >
                        <div className='flex flex-col pt-4'>
                            <label className='text-sm text-gray-500 font-medium'>Movie Name</label>
                            <input type="text" name="title" className='w-72 h-10 border-b-2 placeholder:text-sm font-medium px-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500' placeholder={state.title} onBlur={handleBlur} />
                        </div>

                        <div className='flex flex-col pt-4'>
                            <label className='text-sm text-gray-500 font-medium'>Movie Description</label>
                            <input type="text" name="desc" className='w-[400px] h-10 border-b-2 placeholder:text-sm font-medium px-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 my-1' placeholder='Enter movie description' onBlur={handleBlur} />
                        </div>

                        <div className='flex flex-col pt-4'>
                            <label className='text-sm text-gray-500 font-medium'>Genre</label>
                            <input type="text" name="genre" className='w-72 h-10 border-b-2 placeholder:text-sm font-medium px-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500' placeholder={state.genre} onBlur={handleBlur} />
                        </div>

                        <div className='flex flex-col pt-4'>
                            <label className='text-sm text-gray-500 font-medium'>Limit</label>
                            <input type="text" name="limit" className='w-72 h-10 border-b-2 placeholder:text-sm font-medium px-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500' placeholder={state.limit} onBlur={handleBlur} />
                        </div>

                        <div className='flex flex-col pt-4'>
                            <label className='text-sm text-gray-500 font-medium'>Year</label>
                            <input type="text" name="year" className='w-72 h-10 border-b-2 placeholder:text-sm font-medium px-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500' placeholder={state.year} onBlur={handleBlur} />
                        </div>

                        <div className='flex flex-col pt-4'>
                            <label className='text-sm text-gray-500 font-medium'>Duration</label>
                            <input type="text" name="duration" className='w-72 h-10 border-b-2 placeholder:text-sm font-medium px-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500' placeholder={state.duration} onBlur={handleBlur} />
                        </div>

                        <div className="flex w-[400px] flex-col pt-4">
                            <label className='text-sm text-gray-500 font-medium'>Is-Series</label>
                            <select className="px-2 py-1 focus:outline-gray-300 border border-solid rounded-md border-gray-300 my-2" name="isSeries" id="active" onBlur={handleBlur}>
                                <option value="false">No</option>
                                <option value="true">Yes</option>
                            </select>
                        </div>




                    </div>
                    <div>
                        <div className='flex flex-col h-full justify-between items-center'>
                            <div>
                                <div className='flex mt-2'>
                                    <img src={state?.titleImg} className="w-28 h-28 rounded-lg object-cover" />
                                    <label htmlFor='file' className='flex items-center ml-3 mr-2 cursor-pointer'>
                                        <div className={`text-2xl flex items-center`}>
                                            <ion-icon name="images-sharp"></ion-icon>
                                        </div>
                                        <input type="file" id='file' accept=".png,.jpeg,.jpg" className='hidden' onChange={(e) => setTitleImg(e.target.files[0])}/>
                                    </label>
                                </div>
                                <div className='flex flex-col pt-4'>
                                    <label className='text-sm text-gray-500 font-medium'>Cover image</label>
                                    <input type="file" className='w-72 h-10 px-2 my-2 font-medium text-sm' onChange={(e) => setCoverImg(e.target.files[0])}/>
                                </div>

                                <div className='flex flex-col pt-2'>
                                    <label className='text-sm text-gray-500 font-medium'>Thumbnail image</label>
                                    <input type="file" className='w-72 h-10 text-sm font-medium px-2 my-1' onChange={(e) => setSmImg(e.target.files[0])}/>
                                </div>

                                <div className='flex flex-col pt-2'>
                                    <label className='text-sm text-gray-500 font-medium'>Trailer</label>
                                    <input type="file" className='w-72 h-10 text-sm font-medium px-2 my-1' onChange={(e) => setTrailer(e.target.files[0])}/>
                                </div>

                                <div className='flex flex-col pt-2'>
                                    <label className='text-sm text-gray-500 font-medium'>Video</label>
                                    <input type="file" className='w-72 h-10 text-sm font-medium px-2 my-1' onChange={(e) => setVideo(e.target.files[0])}/>
                                </div>
                            </div>


                            <div>
                            {uploaded === 5 ? <button onClick={handleUpdate} className='bg-teal-600 text-white px-4 py-1 rounded-md font-medium'>Update</button> : <button className='bg-green-500 text-white px-4 py-1 rounded-md font-medium' onClick={handleUpload}>Upload</button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Movie;