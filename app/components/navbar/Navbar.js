"use client"
import React from 'react'
import styles from './style.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import logoPutih from '../../../public/mulonPutih.svg';
import logoHitam from '../../../public/mulonSamping.png';
import logoResponsive from '../../../public/Mulon.png';
import hamburgerIcon from '../../../public/asset/icons/hamburger.png'
import { motion, useAnimation } from "framer-motion"

import { HiMenu } from "react-icons/hi";
export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [prevScrollY, setPrevScrollY] = useState(0);
    const controls = useAnimation();
    const initialPosition = scrolled ? -22 : +20;
    
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;


            if (currentScrollY > 5 && !scrolled) {
                setScrolled(true);
            } else if (currentScrollY <= 5 && scrolled) {
                setScrolled(false);
            }

            // Check if scrolling up and if the navbar is not fully visible
            if (currentScrollY < prevScrollY && !scrolled) {
                controls.start({ y: 0 });
            } else {
                controls.start({ y: -60 }); // Adjust this value to control how much the navbar slides down
            }

            const isMobileView = window.matchMedia('(max-width: 768px)').matches;

            if (isMobileView) {
                // You can set specific styles for mobile view here
                controls.start({ y: 0 });
            } else {
                controls.start({ y: initialPosition });
            }

            setPrevScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled, prevScrollY, controls]);

    const logoSrc = scrolled ? logoPutih : logoHitam;
    const navbar = scrolled ? `${styles.navbar} ${styles.scrolled}` : styles.navbar;

    const navbarAnimation = {
        backgroundColor: scrolled ? '#549b79' : 'transparent',
        boxShadow: scrolled ? '0px 0px 10px rgba(0, 0, 0, 0.1)' : 'none',
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
    };

    return (
        <>
            <nav className={styles.container}>

                <motion.div
                    animate={{ ...navbarAnimation, y: initialPosition }}
                    initial={false}
                    style={{ y: controls }}
                    className={navbar}>
                    <div className={styles.wrapLogo}>
                        <div className={styles.navLogo}>
                            <Link href={'/'}>
                                <Image
                                    src={logoSrc}
                                    alt='Mulon Logo'
                                    width={100}
                                    height={33}
                                />
                            </Link>

                        </div>
                        <ul className={styles.navbar__items}>
                            <li>
                                <Link href="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    Angkut Sampah
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    Activity
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    Blog
                                </Link>

                            </li>
                        </ul>
                        {/* <div className={styles.hamburgerPlace} >
                            <HiMenu width={40} height={40} />
                        </div> */}
                    </div>


                </motion.div>

            </nav >
        </>

    )
}


export default Navbar