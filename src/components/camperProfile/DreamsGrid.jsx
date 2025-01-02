import React, { useEffect, useRef } from 'react';
import imagesLoaded from 'imagesloaded';
import Masonry from 'masonry-layout';
import { dreamsData } from '../../data/data';
import styles from './styles/DreamsGrid.module.css'

const DreamsGrid = () => {

  const uniqueDreams = [...new Set(dreamsData.dreams.map(dream => dream.id))].map(id => 
    dreamsData.dreams.find(dream => dream.id === id)
  );
  
  return (
    <div className={styles.container}>
      {uniqueDreams.map(box => (
        <div key={box.id} className={styles.box}>
          <img src={box.image} alt={box.title} />
          <div className={styles.overlay}>
            <p>{box.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
 };
 
 export default DreamsGrid;