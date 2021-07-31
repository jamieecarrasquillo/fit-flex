import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const SideBar = (props) => {
  return (
    <div className='side-bar-container'>
      <div className='user-info-container'>
        <div className='user-image'>
          <img
            alt=''
            src='https://media-exp1.licdn.com/dms/image/C4E03AQGr2JhwHUAbXg/profile-displayphoto-shrink_800_800/0/1593014512052?e=1632960000&v=beta&t=BWfpVd8jsKNe0zq6repldiR1ySe18Nvg1U9Hxn0q6uc'
            style={{ width: '25px', borderRadius: '25px' }}
          />
        </div>
        <div className='user-username'>jeimiyuniseu</div>
        <div className='user-name'>jamie eunice</div>
        <div className='user-people-suggestions-container'>
          Suggestions For You
          <div className='single-user-suggestion'>
            <img
              alt=''
              src='https://media-exp1.licdn.com/dms/image/C4E03AQGr2JhwHUAbXg/profile-displayphoto-shrink_800_800/0/1593014512052?e=1632960000&v=beta&t=BWfpVd8jsKNe0zq6repldiR1ySe18Nvg1U9Hxn0q6uc'
              style={{ width: '25px', borderRadius: '25px' }}
            />
            <div className='user-username'>jeimiyuniseu</div>
            <div className='follow'>follow</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
