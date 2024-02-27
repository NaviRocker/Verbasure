import React from "react";

import avatar1 from '../assets/avatars/image 1.png'
const DisplayAvatarBar = () => {

    return (
        <>
            <displayAvatar className="d-flex justify-content-end" >
                <div>
                    <img src={avatar1} className="w-100 " alt=""></img>
                </div>
                
            </displayAvatar>
        </>
    );
};

export default DisplayAvatarBar;
