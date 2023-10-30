"use client"
import React from 'react'
import styles from './style.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const FootersIndex = () => {
    return (
        <>
            <footer>
                <div className={styles.footer}>
                    <div className={styles.footer__container}>
                        <div className={styles.footer__logo}>
                            <Image
                                src={"/mulonPutih.svg"}
                                width={350}
                                height={270}
                                alt='mulon logo'
                            />
                        </div>

                        <div className={styles.footer__wrap}>
                            <div className={styles.items}>
                                <h5 className={styles.whiteColor}>Home</h5>
                                <div className={styles.items__list}>
                                    <p>
                                    <Link href={'/'}>
                                        Home
                                        </Link>
                                        </p>
                                    <p>About Us</p>
                                    <p>Services</p>
                                </div>
                            </div>
                            <div className={styles.items}>
                                <h5 className={styles.whiteColor}>Activity</h5>
                                <div className={styles.items__list}>
                                    <p>Our Team</p>
                                    <p>Partner With Us</p>
                                    <p>FAQ</p>
                                    <p>Developer Portal</p>
                                </div>
                            </div>
                            <div className={styles.items}>
                                <h5 className={styles.whiteColor}>Support</h5>
                                <div className={styles.items__list}>
                                    <p>Account</p>
                                    <p>Support Center</p>
                                    <p>Feedback</p>
                                    <p>Contact Us</p>
                                </div>
                            </div>
                            <div className={styles.items}>
                                <h5 className={styles.whiteColor}>Social Media</h5>
                                <div className={styles.items__social}>
                                    <Image
                                        src={"/asset/icons/Instagram.svg"}
                                        width={30}
                                        height={30}
                                        alt='mulon logo'
                                        className={styles.iconsControl}
                                    />
                                    <Image
                                        className={styles.iconsControl}
                                        src={"/asset/icons/Facebook.svg"}
                                        width={30}
                                        height={30}
                                        alt='mulon logo'
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className={styles.footer__copy}>

                        <p>© 2023 Mulon. Copyright and All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default FootersIndex


