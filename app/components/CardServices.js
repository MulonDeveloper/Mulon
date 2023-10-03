import React from 'react'
import styles from '../styles/home.module.scss'


const CardServices = () => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.card__container}>
                    <div className={styles.card__container__iconHolder}>
                        <p>icn</p>
                    </div>
                    <div className={styles.card__container__tittle}>
                        <h3> Lorem ipsum.</h3>
                    </div>

                    <div className={styles.card__container__param}>
                        <p>Pengangkut Sampah Rumahan, Driver Kami Akan Menjemput Sampahmu </p>
                    </div>

                    <div className={styles.card__container__button}>
                        <p>Selengkapnya</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardServices