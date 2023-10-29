import React from 'react'
import Navbar from '@/app/components/navbar/Navbar'
import { Footer } from '@/app/components/footers/footer'
import Image from 'next/image'
import CardServices from '@/app/components/CardServices'
import styles from './style.module.scss'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const About = () => {
    return (
        <>
            <Navbar />
            <div className={styles.about}>
                <div className="about__wrapper">
                    <div className="LContent">
                        <h1>Tentang <span className='secondary'>Kami</span></h1>
                        <p className='bodyText '>
                            Mulon (Mulung Online) adalah startup teknologi yang bergerak pada lingkungan dan juga sosial, kami hadir sebagai pendekatan baru bagi Masyarakat dalam mengatasi dan mengurangi masalah sampah dengan pemanfaatan teknologi dan digital.
                            <br />
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
                    <h1>Visi <span className='secondary'>Kami</span></h1>
                    <p className='bodyText'>
                        Menjadi startup terdepan di Indonesia yang bergerak dalam jasa pelayanan yang dapat memberikan Solusi cerdas dan efisien bagi Masyarakat dan lingkungan, Serta transformasi sistem pengelolaan sampah dengan pemanfaatan teknologi.
                    </p>
                </div>
                <div className="textAbove">
                    <h1>Misi <span className='secondary'>Kami</span></h1>
                    <p className='bodyText'>
                        Menyediakan layanan penjemputan yang cepat dan tanggap, dengan tujuan penekanan pengurangan sampah di lingkungan masyarakat. Kami akan merancang, mengembangkan, dan juga memanfaatkan teknologi untuk membangun sistem yang cerdas dan efisien dalam mengelola sampah.
                    </p>
                </div>

                <div className="textAbove">
                    <p className='bodyText'>
                        Visi dan misi Mulon Smart Waste Management menunjukkan komitmen kami untuk memberikan solusi cerdas dan efisien dalam pengelolaan sampah dengan pemanfaatan teknologi. Kami berusaha untuk memberikan layanan yang cepat, tanggap, dan ramah lingkungan dengan harga yang terjangkau. Dengan layanan kami, kami berharap dapat memberikan manfaat dan solusi bagi pengguna kami dalam hal pengelolaan sampah, serta membantu mengurangi dampak negatif dari sampah terhadap lingkungan.
                    </p>
                </div>
                <div className="textAbove">
                    <h1>Gabung Bersama <span className='secondary'>Kami</span></h1>
                    <p className='bodyText'>
                        Bergabunglah dengan tim kami dan bersama-sama kita berkontribusi dalam menjawab tantangan lingkungan saat ini. Semangat dan dedikasi Anda akan membawa perubahan positif untuk bumi kita. Kunjungi halaman Karir kami untuk mengeksplorasi beragam peluang pekerjaan yang tersedia. Kami yakin bahwa dengan kolaborasi, kita dapat menciptakan perubahan yang berkelanjutan bagi lingkungan dan masyarakat. Jadi, jangan ragu untuk mengajukan lamaran dan menjadi bagian dari perjalanan Mulon yang penuh makna.
                    </p>
                    <button className='primary_button'>
                        Lihat Lowongan
                    </button>

                </div>

                <div className="textAbove">
                    <h1>Partner Bersama <span className='secondary'>Kami</span></h1>
                    <p className='bodyText'>
                        Kami percaya bahwa kerja sama adalah kunci kesuksesan dalam menghadapi permasalahan lingkungan dan sampah. Di Mulon, kami berbangga menjadi bagian dari jaringan mitra yang kuat yang mendukung visi dan misi kami. Kami bekerjasama dengan berbagai pihak, mulai dari pemerintah daerah, lembaga non-profit, hingga perusahaan-perusahaan teknologi, untuk menciptakan solusi yang berkelanjutan.
                        Mitra kami membantu kami dalam berbagai aspek, termasuk pengembangan teknologi, perluasan layanan, dan mendukung program-program sosial. Kami senantiasa terbuka untuk menjalin kemitraan baru yang dapat membantu kami mencapai tujuan kami dalam pengelolaan sampah yang lebih baik dan lingkungan yang lebih bersih.
                        Dalam upaya kami untuk menciptakan perubahan positif, kami mengundang organisasi dan perusahaan lain untuk bergabung dengan kami dalam memecahkan permasalahan lingkungan saat ini. Bersama-sama, kami dapat memberikan dampak yang lebih besar dan menciptakan masa depan yang lebih baik.
                        Mari menjalin kemitraan dan berkontribusi bersama kami dalam menjaga kebersihan lingkungan dan mengurangi dampak negatif sampah. Jika Anda tertarik untuk menjadi mitra kami, silakan hubungi tim kami untuk berdiskusi lebih lanjut. Kami sangat menantikan kerja sama yang berarti.
                    </p>
                    <button className='primary_button'>
                        Hubungi Kami
                    </button>
                </div>
            </div>



            <div className="blog">
                <h1>Aktivitas <span className='secondary'>Kami</span></h1>
                <div className="blog__wrapper">
                </div>
                <button className='primary_button'>Lihat Keseruan dan aktivitas kami</button>
            </div>
            <Footer />
        </>
    )
}

export default About