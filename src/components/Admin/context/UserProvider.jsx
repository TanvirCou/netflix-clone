/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [allMovies, setAllMovies] = useState([]);
    const [allList, setAllList] = useState([]);


    return (
    <UserContext.Provider value={{user, setUser, allMovies, setAllMovies, allList, setAllList}}>
        {children}
    </UserContext.Provider>
    );
};

export default UserProvider;