import styles from './Card.module.css'

function Card({item,modelo,engine,potencia,velocidade,preco}){
    return (
        <section className={styles.section}>
          <h3>{item}</h3>
          <p>{modelo}</p> 
          <p>{engine}</p> 
          <p>{potencia}</p>
          <p>{velocidade}</p>
          <p>{preco}</p>
        </section>
    )
}

export default Card