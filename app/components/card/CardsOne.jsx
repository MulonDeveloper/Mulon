"use client"
import React from 'react'
import { MdAttachMoney } from "react-icons/md";
import styles from './style.module.scss'
const CardsOne = ({ icons, text }) => {
    return (
        <>
            <div className={styles.wrapper}>

                <div className={styles.content}>
                    <div className={styles.icons}>
                        <MdAttachMoney />
                    </div>
                    <div className={styles.text}>
                        Hemat Biaya
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.icons}>
                        <MdAttachMoney />
                    </div>
                    <div className={styles.text}>
                        Hemat Biaya
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.icons}>
                        <MdAttachMoney />
                    </div>
                    <div className={styles.text}>
                        Hemat Biaya
                    </div>
                </div>

            </div>

        </>
    )
}

export default CardsOne