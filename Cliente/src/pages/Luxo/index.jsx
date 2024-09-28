import React, { useEffect, useState } from 'react';
import styles from './Luxo.module.css';
import Card from '../../componentes/card';


function Luxo() {
  const [ferrariCars, setFerrariCars] = useState([]);

  useEffect(() => {
    const buscarCarros = async () => {

        const response = await fetch('./carrosluxo.json');
        const data = await response.json();
        setFerrariCars(data.ferrari_cars); 
    };

    buscarCarros();
  }, []);

  return (
    <div className={styles.luxo}>
      <h1 className={styles.titulo}>Carros de Luxo</h1>
      <ul >
        {ferrariCars.map((item, index) => (
       

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

export default Luxo
