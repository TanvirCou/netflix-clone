import React from 'react';

const ProfileInfo = () => {

    function checkAndCloseDropDown(e) {
        let targetEl = e.currentTarget;
        if (targetEl && targetEl.matches(':focus')) {
            setTimeout(function () {
                targetEl.blur();
            }, 0);
        }
    }

    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" onMouseDown={(e) => checkAndCloseDropDown(e)} className="btn relative bg-transparent shadow-none border-none md:px-1 px-0">
                <div className="avatar flex items-center">
                    <div className="w-6 md:w-7 rounded-lg object-cover">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>

                    <div className='text-lg text-white md:text-xl ml-0.5 md:ml-1.5 flex items-center'>
                        <ion-icon name="caret-down-sharp"></ion-icon>
                    </div>
                </div>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52">
                <li>My Profile</li>
                <li>Log out</li>
            </ul>
        </div>
    );
};

export default ProfileInfo;