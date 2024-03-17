import React from 'react';
import Photo from '../images/user.jpg';
import './Upload.css'

const Upload = () => {
    return (
        <div className='uploadConatiner'>
            <img src={Photo} className='uploadImg'></img>
            <div className='uploadButtons'>
                <button>Select from device</button>
                <button>Upload</button>
            </div>
        </div>
    )
}

export default Upload