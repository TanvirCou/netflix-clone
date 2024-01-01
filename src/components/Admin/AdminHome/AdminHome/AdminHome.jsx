import Featured from '../Featured/Featured';
import Chart from '../Chart/Chart';
import WidgetSm from '../WidgetSm/WidgetSm';
import WidgetLg from '../WidgetLg/WidgetLg';
import { useEffect, useMemo, useState } from 'react';
import axios from "axios";
import Navbar from '../../Navbar/Navbar';
import Sidebar from '../../Sidebar/Sidebar';

const AdminHome = () => {
    const MONTHS = useMemo(() =>
        [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Agu",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ], []);

    const [userStats, setUserStats] = useState([]);

    useEffect(() => {
        const geStatLists = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/api/user/stats`, {
                    headers: {
                        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NThlYTUxYTE5NjhiZDMwZWVlM2MxZjEiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MDM4NDcyOTYsImV4cCI6MTcwNDI3OTI5Nn0.Yz3yJlixi41lvZjomRZPq_6ldQMH8msFnV_0-eDRiWM"
                    }
                });
                const statList = res.data.sort(function (a, b) {
                    return a._id - b._id;
                });
                statList.map(item => setUserStats((prev) => [...prev, { name: MONTHS[item._id - 1], "New User": item.total }]));
            } catch (err) {
                console.log(err);
            }
        }
        geStatLists();
    }, [MONTHS]);

    console.log(userStats);
    return (
        <div>
            <Navbar />
            <div className="flex">
                <div className="w-1/5">
                    <Sidebar />
                </div>
                <div className="w-4/5 pt-16 pb-4">
                    <Featured />
                    <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
                    <div className='w-full flex px-4'>
                        <div className='w-2/5 border shadow-md mx-1 rounded'>
                            <WidgetSm />
                        </div>
                        <div className='w-3/5 border shadow-md mx-1 rounded'>
                            <WidgetLg />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AdminHome;