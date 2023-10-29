"use client"
import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { IoIosArrowDown } from 'react-icons/io';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, useAnimation } from "framer-motion"
import logoPutih from '../../../public/mulonPutih.svg';
import logoHitam from '../../../public/mulonSamping.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [prevScrollY, setPrevScrollY] = useState(0);
    const controls = useAnimation();
    const isMobileView = useMediaQuery({ maxWidth: 768 });
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const initialPosition = scrolled ? -22 : 20;

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 5 && !scrolled) {
                setScrolled(true);
            } else if (currentScrollY <= 5 && scrolled) {
                setScrolled(false);
            }

            if (currentScrollY < prevScrollY && !scrolled) {
                if (!isMobileView) {
                    controls.start({ y: 0 });
                }
            } else {
                controls.start({ y: -60 });
            }

            if (isMobileView) {
                controls.start({ y: 0 });
            } else {
                controls.start({ y: scrolled ? -22 : 20 });
            }

            setPrevScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled, prevScrollY, controls, isMobileView]);

    const logoSrc = scrolled ? logoPutih : logoHitam;
    const navbar = scrolled ? `${styles.navbar} ${styles.scrolled}` : styles.navbar;

    const navbarAnimation = {
        backgroundColor: scrolled || isMobileView ? '#549b79' : 'transparent',
        boxShadow: scrolled || isMobileView ? '0px 0px 10px rgba(0, 0, 0, 0.1)' : 'none',
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
    };

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
                                <li>Home</li>
                            </Link>
                            <li className={styles.nestedLi}>
                                <p className={styles.options}>
                                    Services <IoIosArrowDown />
                                </p>
                                <ul className={styles.nestedUL}>
                                    <Link href="/">
                                        <li>Angkut sampah</li>
                                    </Link>
                                    <Link href="/">
                                        <li>Pengembangan IoT</li>
                                    </Link>
                                    <Link href="/">
                                        <li>Pemberdayaan Masyarakat</li>
                                    </Link>
                                </ul>
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
    );
};

export default Navbar;
