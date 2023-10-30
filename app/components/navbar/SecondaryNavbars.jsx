"use client"
import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, useAnimation } from "framer-motion"
import logoPutih from '../../../public/mulonPutih.svg';
import logoHitam from '../../../public/mulonSamping.png';
const SecondaryNavbars = () => {
    return (
        <nav className={styles.container}>

            <motion.div
                animate={{ ...navbarAnimation, y: isMobileView ? 0 : (scrolled ? -22 : 20) }}
                initial={false}
                style={{ y: controls }}
                className={navbar}
            >
                <div className={styles.wrapLogo}>
                    <div className={styles.navLogo}>
                        <Link href={'/'}>
                            <Image src={logoSrc} alt="Mulon Logo" width={100} height={33} />
                        </Link>
                    </div>
                    <>
                        <ul className={`${styles.navbar__items} ${isMenuOpen ? (`${styles.active}`) : (`${styles.none}`)}`}>
                            <Link href="/">
                                <li>
                                    Tentang Kami
                                    {/* <p  onClick={showingMenus}>
                                Tentang Kami
                                {isUlShow ? (
                                    <IoIosArrowUp />
                                ) : (
                                    <IoIosArrowDown />
                                )}
                            </p>

                            <MenusAbout /> */}
                                </li>

                            </Link>
                            <li className={styles.nestedLi} >
                                <p className={styles.options} onClick={showingMenus}>
                                    Layanan
                                    {isUlShow ? (
                                        <IoIosArrowUp />
                                    ) : (
                                        <IoIosArrowDown />
                                    )}
                                </p>
                                <>
                                    <ul className={`${isUlShow ? (`${styles.shoMenu}`) : (`${styles.dontShow}`)}`}>
                                        <motion.div
                                            className={`${styles.nestedUL} `}
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ type: "tween", ease: "easeInOut", duration: 1 }}
                                        >
                                            <div className={styles.nestedUL__wrap}>
                                                <div className={styles.nestedUL__height}>
                                                    <img src={`../../../asset/icons/truck.svg`} alt="test" />
                                                    <li>Angkut sampah</li>
                                                    <p>Layanan Penjemputan sampah yang cepat dan tanggap, jadwalkan pengangkutan samapah sesuka kamu</p>
                                                </div>
                                                <div className={styles.nestedUL__cardWidth}>
                                                    <div className={styles.nestedUL__card}>
                                                        <li>Pengembangan IoT</li>
                                                        <p>Pengenmabangan Tehnology kami menjadi inovasi terbaru dalam membangun kota pintar yang bersih, lihat perjalanan kami disini</p>
                                                    </div>
                                                    <div className={styles.nestedUL__card}>
                                                        <li>Pemberdayaan Masyarakat</li>
                                                        <p>Lihat Perjalanan Kami bersama masyarakat dalam menjada keberihan lingkungan yang berkelanjutan disini.</p>
                                                    </div>

                                                </div>
                                            </div>
                                        </motion.div>
                                    </ul>
                                </>
                            </li>
                            <li>
                                <Link href="#">Activity</Link>
                            </li>
                            <li>
                                <Link href="#">Blog</Link>
                            </li>
                        </ul>
                    </>


                    <div className={styles.hamburgerPlace} onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <HiX width={50} height={50} />
                        ) : (
                            <HiMenu width={50} height={50} />
                        )}
                    </div>

                </div>

            </motion.div>
        </nav>
    )
}

export default SecondaryNavbars