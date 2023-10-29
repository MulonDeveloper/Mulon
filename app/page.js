import Image from 'next/image'
import CardServices from './components/CardServices'
import { Footer } from './components/footers/footer'
import Navbar from './components/navbar/Navbar'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
export default function Home() {
  return (
    <>

      <Navbar />
      <div className='mainHero'>
        <div className="heroWrapper">
          <h1 className=' lh'>Solusi Modern Untuk Kupang Yang <span className='secondary'>Bersih</span></h1>
          <div className="bodyText paramMt">Angkut Sampah Tidak Pernah Semudah ini. Jadilah Patner dan bergabung berasama kami, ciptakan kupang yang lebih bersih dan sehat dimulai dari anda.</div>
          <div className="buttonWrap paramMt flex flex-wrap flex-row gap-5 justify-start mt-5">
            <button className='primary_button'>Hubungi Kami Sekarang <span><Image src={'../asset/icons/Right.svg'} alt='arrow right' width={14} height={14} className='svgIcons' /></span></button>
            <button className='secondary_button'>Daftar <span><Image src={'../asset/icons/ArrowOb.svg'} alt='arrow right' width={14} height={14} className='svgIcons' /></span></button>
          </div>
        </div>
        <Image
          src={'../asset/earth.svg'}
          width={818}
          height={600}
          className='earthSVG'
          alt='Green Earth' />
      </div>

      <div className="block">
        <p className='bodyText'>Cara Baru Atasi Sampah Dengan Smart Waste Management Kami</p>
      </div>

      <div className="about">
        <div className="about__wrapper">
          <div className="LContent">
            <h1>Tentang <span className='secondary'>Kami</span></h1>
            <p className='bodyText '>
              Mulon adalah Startup Teknologi yang bergerak pada layanan lingkungan dan sosial, kami hadir sebagai bentuk pendekatan baru bagi masyarakat kupang khususnya dalam mengatasi masalah sampah dengan pemanfaatan teknologi.
            </p>
            <Link href='/home/about'>
              <button className='primary_button'>Lihat Lebih Detail</button>
            </Link>
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

          <CardServices title={"Penjemputan Sampah"} param={"Layanan utama kami adalah jasa penjemputan sampah, Kami hadir untuk melayani dan menjadwalkan penjemputan sampah di rumah anda. "} img={"truck"} />
          <CardServices title={"Pengembangan Produk IOT"} param={"Menggunakan Teknologi Internet Of Things yang menjadi inovasi terbaru kami dalam mengelola sampah agar menjadi jauh lebih efisien."} img={"iot"} />
          <CardServices title={"Pemberdayaan Masyarakat"} param={"Kami akan memberikan edukasi dan sumber daya kepada masyarakat untuk dapat berperan aktif dalam menjaga kebersihan dan keberlanjutan lingkungan."} img={"community"} />
        </div>
      </div>

      <div className="promo">
        <div className="promo__left">
          <Image
            src={"/asset/gambar1.png"}
            alt='illustrasi gambar'
            width={560}
            height={476}
          />
        </div>

        <div className="promo__right">
          <h1>Hubungi kami sekarang dan dapatkan banyak <span className='secondary'> Promo Menarik</span></h1>
          <p className='bodyText'>
            Hubungi Kami sekarang dan dapatkan banyak potongan harga pengangkutan sampah sampai dengan 50% khusus daerah Kupang
          </p>
          <button className='primary_button'>Hubungi Kami Sekarang</button>
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
