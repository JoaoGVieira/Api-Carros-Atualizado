import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Popular.module.css'
import Card from '../../componentes/card';

function Popular() {
  const [popularCars, setPopularCars] = useState([]);

  useEffect(() => {
    const buscarCarros = async () => {

        const response = await fetch('./carrospopulares.json');
        const data = await response.json();
        setPopularCars(data.popular_cars); 
    };

    buscarCarros();
  }, []);

  return (
    <div className={styles.popular}>
      <h1 className={styles.titulo}>Carros Populares</h1>
      <ul >
        {popularCars.map((item, index) => (
       

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

export default Popular