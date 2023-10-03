import React from 'react'
import styles from '../styles/home.module.scss'


const CardServices = () => {
    return (
        <>

        <div className={styles.card}>
            <div className={styles.card__iconBg}>
                <img src="../../../asset/icons/motor.svg" alt="" />
            </div>
            <h3>Lorem Ipsum</h3>

            <p className='bodyText text-center mx-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, magnam! Nisi sapiente commodi quod doloremque unde inventore aperiam dicta veritatis.</p>

            <button className='primary_button'>Selengkapnya</button>
        </div>
        </>
    )
}

export default CardServices