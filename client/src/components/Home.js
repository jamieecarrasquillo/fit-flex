import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';
import IMore from './icons/IMore';
import IHeart from './icons/IHeart';
import IHeart2 from './icons/IHeart2';
import IBicep from './icons/IBicep';
import IComment from './icons/IComment';
import ISend from './icons/ISend';
import ISave from './icons/ISave';
import './styling/home.css';

const Home = (props) => {
  return (
    <div className='home-container'>
      <div className='post-container'>
        <div className='user-information'>
          <div className='user-information-inner'>
            <div className='user-image'>
              <img
                alt=''
                src='https://media-exp1.licdn.com/dms/image/C4E03AQGr2JhwHUAbXg/profile-displayphoto-shrink_800_800/0/1593014512052?e=1632960000&v=beta&t=BWfpVd8jsKNe0zq6repldiR1ySe18Nvg1U9Hxn0q6uc'
                style={{ width: '35px', borderRadius: '35px' }}
              />
            </div>
            <div className='username-location'>
              <div className='user-username'>jeimiyuniseu</div>
              <div>San Juan, Puerto Rico</div>
            </div>
          </div>
          <div className='more'>
            <IMore />
          </div>
        </div>
        <div className='user-post'>
          <img
            alt=''
            src='https://media-exp1.licdn.com/dms/image/C4E03AQGr2JhwHUAbXg/profile-displayphoto-shrink_800_800/0/1593014512052?e=1632960000&v=beta&t=BWfpVd8jsKNe0zq6repldiR1ySe18Nvg1U9Hxn0q6uc'
          />
        </div>
        <div className='post-interaction-icons'>
          <div className='like-comment-send'>
            <div className='like'>
              <IHeart2 />
            </div>
            <div className='comment'>
              <IComment />
            </div>
            <div className='send'>
              <ISend />
            </div>
          </div>
          <div className='save'>
            <ISave />
          </div>
        </div>
        <div className='post-likes-description-comments'>
          <div className='likes'>Liked by psychic_princess and +500</div>
          <div className='description'>
            <div>jeimiyuniseu</div>
            <div>First post here.</div>
          </div>
          <div className='comments'>
            <div>psychic_princess</div>
            <div>Beautif!</div>
          </div>
        </div>
      </div>
      <div className='side-bar-container'>
        <SideBar />
      </div>
    </div>
  );
};

export default Home;
