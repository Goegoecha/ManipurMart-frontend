import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reprehenderit beatae ad accusantium in. Saepe odio doloribus aliquam fugiat aspernatur incidunt minus adipisci tempore velit repudiandae consequatur, iusto natus a!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ratione odio maxime a alias porro minus, aliquam, eius voluptatibus ut illum dolorum corrupti commodi cumque culpa, rerum ea voluptates eos.</p>
      </div>
    </div>
  )
}

export default DescriptionBox