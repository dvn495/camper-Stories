import React from 'react';
import './styles/DreamsGrid.css';
import image from '../../assets/paisaje-prueba.jpeg';

const DreamsGrid = () => {

  // Simulación de datos de la BD
  const imageData = [
    { 
      id: 1, 
      title: "Dream Title 1", 
      description: "Description for dream 1",
      image: image
    },
    { 
      id: 2, 
      title: "Dream Title 2", 
      description: "Description for dream 2",
      image: image
    }
    // Simular que solo hay 2 imágenes en la BD
  ];

  // Mensaje por defecto para boxes vacíos
  const defaultBox = {
    id: 'default',
    title: "Add your dream",
    description: "Share your achievement with the community",
    image: null
  };

  // Asegurar que siempre tengamos 8 elementos
  const normalizedData = Array(8).fill(defaultBox).map((defaultItem, index) => {
    return imageData[index] || defaultItem;
  });

  return (
    <div className="bento-grid-dreams-profile">
      <div className="col-left-dreams">
        {[0, 2, 4].map((startIdx) => (
          <div key={startIdx} className="box-dreams">
            {[0, 1].map((offset) => {
              const idx = startIdx + offset;
              const item = normalizedData[idx];
              return (
                <div key={idx} className="inner-box-dreams">
                  {item.image ? (
                    <>
                      <img src={item.image} alt={item.title} />
                      <div className="overlay">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </>
                  ) : (
                    <div className="overlay show">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
 
      <div className="col-right-dreams">
        {[6, 7].map((idx) => {
          const item = normalizedData[idx];
          return (
            <div key={idx} className="box-dreams">
              {item.image ? (
                <>
                  <img src={item.image} alt={item.title} />
                  <div className="overlay">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </>
              ) : (
                <div className="overlay show">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DreamsGrid;