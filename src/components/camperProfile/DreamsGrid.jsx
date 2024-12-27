import React from 'react';
import './styles/DreamsGrid.css';
import image from '../../assets/paisaje-prueba.jpeg';

const DreamsGrid = () => {
  return (
    <div className='bento-grid-dreams-profile'>
      <div className='col-left-dreams'>

        <div className='box-dreams'>
          <div className="inner-box-dreams">
            <img src={ image } alt="" />
          </div>

          <div className="inner-box-dreams">
            <img src={ image } alt="" />
          </div>
        </div>

        <div className='box-dreams'>
          <div className="inner-box-dreams">
            <img src={ image } alt="" />
          </div>

          <div className="inner-box-dreams">
            <img src={ image } alt="" />
          </div>
        </div>

        <div className='box-dreams'>
          <div className="inner-box-dreams">
            <img src={ image } alt="" />
          </div>

          <div className="inner-box-dreams">
            <img src={ image } alt="" />
          </div>
        </div>
      </div>

      <div className='col-right-dreams'>
        <div className='box-dreams'>
          <img src={ image } alt="" />
        </div>
        <div className='box-dreams'>
          <img src={ image } alt="" />
        </div>
      </div>
    </div>
  )
}

export default DreamsGrid