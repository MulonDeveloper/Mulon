import React from 'react'
import styles from './style.module.scss'
import Link from 'next/link'


const CardServices = ({ title, param, img, link }) => {
    return (
        <>

            <div className={styles.card}>
                <div className={styles.card__iconBg}>
                    <img src={`../../../asset/icons/${img}.svg`} alt="" />
                </div>

                <div className={styles.card__param}>
                    <h4>{title}</h4>

                    <p className='bodyText text-center mx-4'>{param}</p>

                </div>
                {/* <Link href="#">
                    <button className='primary_button'>Selengkapnya</button>
                </Link> */}
            </div>
        </>
    )
}

export default CardServices