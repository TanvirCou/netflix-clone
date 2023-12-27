import React from 'react';
import Navbar from '../Navbar/Navbar/Navbar';
import Featured from '../Featured/Featured';
import List from '../List/List';

const Home = () => {
    return (
        <div className='bg-black pb-40 h-full overflow-hidden'>
            <Navbar />
            <Featured type="movies"/>
            <List />
            <List />
            <List />
        </div>
    );
};

export default Home;