"use client"
import React from 'react'
import styles from './style.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import logoPutih from '../../../public/mulonPutih.svg';
import logoHitam from '../../../public/mulonSamping.png';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        // Fungsi untuk mengatur state scrolled berdasarkan posisi scroll
        const handleScroll = () => {
            if (window.scrollY > 5 && !scrolled) {
                setScrolled(true);
            } else if (window.scrollY <= 5 && scrolled) {
                setScrolled(false);
            }
        };

        // Tambahkan event listener ketika komponen dimount
        window.addEventListener('scroll', handleScroll);

        // Hapus event listener ketika komponen diunmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    // Tambahkan kelas CSS berdasarkan nilai state scrolled
    const logoSrc = scrolled ? logoPutih : logoHitam;
    const navbar = scrolled ? `${styles.navbar} ${styles.scrolled}` : styles.navbar;
    return (
        <>
            <nav>

                <div className={navbar}>

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

                    <div className={styles.navbar__wrap}>
                        <div className={styles.navbar__items}>
                            <ul>
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
                                {/* <li>
                                    <Link href="#">
                                        Partnership
                                    </Link>

                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>

    )
}

// const Navbar = () => {

//     const [scrolled, setScrolled] = useState(false);

//     useEffect(() => {
//         // Fungsi untuk mengatur state scrolled berdasarkan posisi scroll
//         const handleScroll = () => {
//             if (window.scrollY > 5 && !scrolled) {
//                 setScrolled(true);
//             } else if (window.scrollY <= 5 && scrolled) {
//                 setScrolled(false);
//             }
//         };

//         // Tambahkan event listener ketika komponen dimount
//         window.addEventListener('scroll', handleScroll);

//         // Hapus event listener ketika komponen diunmount
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, [scrolled]);

//     // Tambahkan kelas CSS berdasarkan nilai state scrolled
//     const navbarClass = scrolled ? `${styles.navbar} ${styles.scrolled}` : styles.navbar;
//     return (
//         <>
//             <nav>

//                 <div className={styles.navbar}>

//                     <div className={styles.navLogo}>
//                         <Image
//                             src='/MulonSamping.png'
//                             alt='Mulon Logo'
//                             width={100}
//                             height={33}
//                         />

//                     </div>

//                     <div className={styles.navbar__wrap}>
//                         <div className={styles.navbar__items}>
//                             <ul>
//                                 <li>
//                                     <Link href="#">
//                                         About
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#">
//                                         Services
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#">
//                                         Activity
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#">
//                                         Blog
//                                     </Link>

//                                 </li>
//                                 <li>
//                                     <Link href="#">
//                                         Partnership
//                                     </Link>

//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         </>

//     )
// }

export default Navbar