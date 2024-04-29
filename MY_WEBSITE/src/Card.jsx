import React from 'react';
// import profilePic from '../public/soft.JPG';

const Card = () => {
  return (
  
     <div className='Card'>
       {/* <img src={profilePic} alt="profile picture"></img> */}
       <img src="./public/soft.JPG" alt="" className='Card-image' />
        <h1 className='card-title'>Esra Abdirashid</h1>
        <p className='card-text'>i am adeverloper and designer...😋</p>
 
        </div>
  )
}

export default Card