import { useContext, useState } from "react";
import { storage } from "../firebase"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import axios from "axios";
import { UserContext } from "../context/UserProvider";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const NewMovie = () => {
    const [movieDetails, setMovieDetails] = useState({});
    const [titleImg, setTitleImg] = useState(null);
    const [smImg, setSmImg] = useState(null);
    const [coverImg, setCoverImg] = useState(null);
    const [trailer, setTrailer] = useState(null);
    const [video, setVideo] = useState(null);
    const [uploaded, setUploaded] = useState(0);
    const {allMovies, setAllMovies} = useContext(UserContext);

    const handleBlur = (e) => {
        const value = e.target.value;
        setMovieDetails({...movieDetails, [e.target.name]: value});
    };

  

    const upload = (items) => {
        items.forEach(item => {
            const fileName = new Date().getTime() + item.file?.name;
            const storageRef = ref(storage, `item/${fileName}`);
            const uploadTask = uploadBytesResumable(storageRef, item.file);
            
            uploadTask.on('state_changed',
             (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
            },
            (err) => {console.log(err)},
            () => {
                // Upload completed successfully, now we can get the download URL
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

    const handleCreate = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3000/api/movie/", movieDetails, {
                headers: {
                    authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NThlYTUxYTE5NjhiZDMwZWVlM2MxZjEiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MDM4NDcyOTYsImV4cCI6MTcwNDI3OTI5Nn0.Yz3yJlixi41lvZjomRZPq_6ldQMH8msFnV_0-eDRiWM"
                }
            });
            setAllMovies([res.data, ...allMovies])
            console.log(res.data);
        } catch(err) {
            console.log(err);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="flex">
                <div className="w-1/5">
                    <Sidebar />
                </div>
                <div className="w-4/5 pt-20 px-4 pb-4">
            <p className='mx-8 text-2xl font-bold'>New Movie</p>
            <div className='mx-8'>

                <div className="flex flex-wrap justify-between">

                <div className="flex w-[400px] flex-col pt-4">
                    <label className='text-sm text-gray-500 font-medium'>Title Image</label>
                    <input type="file" className='mt-2 text-sm font-medium ' onChange={(e) => setTitleImg(e.target.files[0])}/>
                </div>

                <div className="flex w-[400px] flex-col pt-4">
                    <label className='text-sm text-gray-500 font-medium'>Thumbnail Image</label>
                    <input type="file" className='mt-2 text-sm font-medium ' onChange={(e) => setSmImg(e.target.files[0])}/>
                </div>

                <div className="flex w-[400px] flex-col pt-4">
                    <label className='text-sm text-gray-500 font-medium'>Cover Image</label>
                    <input type="file" className='mt-2 text-sm font-medium ' onChange={(e) => setCoverImg(e.target.files[0])}/>
                </div>

                <div className='flex flex-col pt-4'>
                    <label className='text-sm text-gray-500 font-medium'>Movie Name</label>
                    <input type="text" name="title" className='w-[400px] h-10 border-b-2 placeholder:text-sm font-medium px-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 my-1' placeholder='Enter movie name' onBlur={handleBlur}/>
                </div>

                <div className='flex flex-col pt-4'>
                    <label className='text-sm text-gray-500 font-medium'>Movie Description</label>
                    <input type="text" name="desc" className='w-[400px] h-10 border-b-2 placeholder:text-sm font-medium px-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 my-1' placeholder='Enter movie description' onBlur={handleBlur}/>
                </div>

                <div className='flex flex-col pt-4'>
                    <label className='text-sm text-gray-500 font-medium'>Genre</label>
                    <input type="text" name="genre" className='w-[400px] h-10 border-b-2 placeholder:text-sm font-medium px-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 my-1' placeholder='Enter movie genre' onBlur={handleBlur}/>
                </div>

                <div className='flex flex-col pt-4'>
                    <label className='text-sm text-gray-500 font-medium'>Year</label>
                    <input type="text" name="year" className='w-[400px] h-10 border-b-2 placeholder:text-sm font-medium px-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 my-1' placeholder='Enter release year' onBlur={handleBlur}/>
                </div>

                <div className='flex flex-col pt-4'>
                    <label className='text-sm text-gray-500 font-medium'>Limit</label>
                    <input type="text" name="limit" className='w-[400px] h-10 border-b-2 placeholder:text-sm font-medium px-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 my-1' placeholder='Enter age limit' onBlur={handleBlur}/>
                </div>

                <div className='flex flex-col pt-4'>
                    <label className='text-sm text-gray-500 font-medium'>Duration</label>
                    <input type="text" name="duration" className='w-[400px] h-10 border-b-2 placeholder:text-sm font-medium px-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 my-1' placeholder='Enter movie duration' onBlur={handleBlur}/>
                </div>

                <div className="flex w-[400px] flex-col pt-4">
                    <label className='text-sm text-gray-500 font-medium'>Is-Series</label>
                    <select className="px-2 py-1 focus:outline-gray-300 border border-solid rounded-md border-gray-300 my-2" name="isSeries" id="active" onBlur={handleBlur}>
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>
                </div>

                <div className="flex w-[400px] flex-col pt-4">
                    <label className='text-sm text-gray-500 font-medium'>Trailer</label>
                    <input type="file" className='mt-2 text-sm font-medium ' onChange={(e) => setTrailer(e.target.files[0])}/>
                </div>

                <div className="flex w-[400px] flex-col pt-4">
                    <label className='text-sm text-gray-500 font-medium'>Video</label>
                    <input type="file" className='mt-2 text-sm font-medium ' onChange={(e) => setVideo(e.target.files[0])}/>
                </div>

                </div>

                <div className='my-4'>
                    {uploaded === 5 ? <button onClick={handleCreate} className='bg-teal-600 text-white px-4 py-1 rounded-md font-medium'>Create</button> : <button className='bg-green-500 text-white px-4 py-1 rounded-md font-medium' onClick={handleUpload}>Upload</button>}
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default NewMovie;