import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Offroad.module.css';
import Card from '../../componentes/card';


function offRoad() {
  const [_4x4, setsOffRoad] = useState([]);

  useEffect(() => {
    const buscarCarros = async () => {

        const response = await fetch('./carrosoffroad.json');
        const data = await response.json();
        setsOffRoad(data.off_road_cars); 
    };

    buscarCarros();
  }, []);

  return (
    <div className={styles.offRoad}>
      <h1 className={styles.titulo}>Carros Off Road</h1>
      <ul >
        {_4x4.map((item, index) => (
       

          <Card
          key={index}
          item = {item.brand}
          modelo={item.model}
          engine={item.engine}
          potencia={item.horsepower}
          velocidade={item.top_speed_mph}
          preco={item.price_usd}
          />
          
          )
          
          )}         
        
      </ul>
    </div>
  );
}
export default offRoad
