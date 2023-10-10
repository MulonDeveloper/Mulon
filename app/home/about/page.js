import React from 'react'
import Navbar from '@/app/components/navbar/Navbar'
import { Footer } from '@/app/components/footers/footer'
import Image from 'next/image'
import CardServices from '@/app/components/CardServices'
import styles from './style.module.scss'

const About = () => {
    return (
        <>
            <Navbar />
            <div className={styles.about}>
                <div className="about__wrapper">
                    <div className="LContent">
                        <h1>Tentang <span className='secondary'>Kami</span></h1>
                        <p className='bodyText '>
                            Mulon adalah Startup Teknologi yang bergerak pada layanan lingkungan dan sosial, kami hadir sebagai bentuk pendekatan baru bagi masyarakat kupang khususnya dalam mengatasi masalah sampah dengan pemanfaatan teknologi.
                        </p>
                    </div>
                    <div className="RContent">
                        <Image
                            src={'/Mulon.png'}
                            alt='Mulon Logo'
                            className='logoMulon'
                            width={450}
                            height={450}
                        />
                    </div>
                </div>
            </div>

            <div className="service">
                <div className="textAbove">
                    <h1>Layanan <span className='secondary'>Kami</span></h1>
                    <p className='bodyText'>
                        Kami berkomitmen untuk menyediakan solusi lingkungan yang canggih. Layanan unggulan kami menggabungkan kemudahan pengelolaan sampah, teknologi Internet of Things yang paling canggih, dan pemberdayaan komunitas untuk menciptakan perubahan yang bermanfaat bagi lingkungan.
                    </p>
                </div>
                <div className="service__wrap">
                    <CardServices />
                    <CardServices />
                    <CardServices />
                </div>
            </div>

            <div className="blog">
                <h1>Tulisan <span className='secondary'>Kami</span></h1>
                <div className="blog__wrapper">
                </div>
                <button className='primary_button'>Lihat Blog Kami</button>
            </div>
            <Footer />
        </>
    )
}

export default About