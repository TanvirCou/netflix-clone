import React from 'react';

const Notification = () => {

    function checkAndCloseDropDown(e){
        let targetEl = e.currentTarget;
        if(targetEl && targetEl.matches(':focus')){
          setTimeout(function(){
            targetEl.blur();
          }, 0);
        }
      }

    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" onMouseDown={(e)=>checkAndCloseDropDown(e)} className="btn relative bg-transparent shadow-none border-none md:px-1 px-0">
            <div className='text-lg md:text-xl text-white flex items-center'>
              <ion-icon name="notifications-sharp"></ion-icon>
            </div>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
            </ul>
        </div>
    );
};

export default Notification;