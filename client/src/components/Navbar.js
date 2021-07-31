import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import IChat from './icons/IChat';
import IHome from './icons/IHome';
import IExplore from './icons/IExplore';
import IHeart3 from './icons/IHeart3';
import ISearch from './icons/ISearch';
import './styling/navbar.css';

const Navbar = (props) => {
  return (
    <div className='nav-container'>
      <div className='left-nav'>
        <div className='logo-text'>
          <h1>Fit Flex</h1>
        </div>
      </div>
      <div className='middle-nav'>
        <div className='search-bar-holder'>
          <div className='search-bar'>
            <div className='search-icon'>
              <ISearch />
            </div>
            <div className='search-text' style={{ fontSize: '13px' }}>
              Search
            </div>
          </div>
        </div>
      </div>
      <div className='right-nav'>
        <div className='inner-icon'>
          <IHome />
        </div>
        <div className='inner-icon'>
          <IChat />
        </div>
        <div className='inner-icon'>
          <IExplore />
        </div>
        <div className='inner-icon'>
          <IHeart3 />
        </div>
        <div className='inner-icon'>
          <img
            alt=''
            src='https://media-exp1.licdn.com/dms/image/C4E03AQGr2JhwHUAbXg/profile-displayphoto-shrink_800_800/0/1593014512052?e=1632960000&v=beta&t=BWfpVd8jsKNe0zq6repldiR1ySe18Nvg1U9Hxn0q6uc'
            style={{ width: '25px', borderRadius: '25px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
