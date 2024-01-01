import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar/Navbar';
import Featured from '../Featured/Featured';
import List from '../List/List';
import axios from "axios";

const Home = ({type}) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        const getLists = async() => {
            try {
            const res = await axios.get(`http://localhost:3000/api/list${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
                headers: {
                    authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NThlYTUxYTE5NjhiZDMwZWVlM2MxZjEiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MDM4NDcyOTYsImV4cCI6MTcwNDI3OTI5Nn0.Yz3yJlixi41lvZjomRZPq_6ldQMH8msFnV_0-eDRiWM"
                }
            });
            setLists(res.data);
            } catch(err) {
                console.log(err);
            }
        }
        getLists();
    }, [type, genre])
    return (
        <div className='bg-black pb-40 h-full overflow-hidden'>
            <Navbar />
            <Featured type={type}/>
           {lists.map(list => <List key={list._id} list={list}/>)}
        </div>
    );
};

export default Home;