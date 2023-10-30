import React from 'react'
import styles from './style.module.scss'
export const MenusAbout = () => {
    return (
        <>
            <div className={styles.aboutMenus}>
                <ul className={styles.aboutMenus__container}>
                    <li clasName={styles.container__card}>
                        Tentang Mulon
                    </li>
                    <li clasName={styles.container__card}>
                        Team Mulon
                    </li>
                </ul>
            </div>
        </>
    )
}
