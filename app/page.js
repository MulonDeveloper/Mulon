import Image from 'next/image'
import Navbar from '@/components/Navigation/navbar'
import MainHero from '@/components/Hero/main'


export default function Home() {
  return (
    <>

      <div className='mainHero'>
        <div className="heroWrapper">
          <h1 className=' lh'>Solusi Modern Untuk Kupang Yang <span className='secondary'>Bersih</span></h1>
          <div className="bodyText mt-3 ml-1 max-w-md">Angkut Sampah Tidak Pernah Semudah ini. Jadilah Patner dan bergabung berasama kami, ciptakan kupang yang lebih bersih dan sehat dimulai dari anda.</div>
          <div className="buttonWrap flex flex-wrap flex-row gap-5 justify-start mt-5">
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
        <p className='bodyText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, enim?</p>
      </div>

      <div className="about">
        <div className="about__wrapper">
          <div className="LContent">
            <h1>Tentang <span className='secondary'>Kami</span></h1>
            <p className='bodyText max-w-xl'>
              Mulon adalah Startup Teknologi yang bergerak pada layanan lingkungan dan sosial, kami hadir sebagai bentuk pendekatan baru bagi masyarakat kupang khususnya dalam mengatasi masalah sampah dengan pemanfaatan teknologi.
            </p>
          </div>
          <div className="RContent">
            <Image
              src={'/MulonAtas.png'}
              alt='Mulon Logo'
              className='logoMulon'
              width={300}
              height={200}
            />
          </div>
        </div>
      </div>
    </>
  )
}
