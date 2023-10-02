import Image from 'next/image'
import Navbar from '@/components/Navigation/navbar'
import MainHero from '@/components/Hero/main'


export default function Home() {
  return (
    <>

      <div className='mainHero'>
        <div className="heroWrapper">
          <h1 className=' lh'>Solusi Modern Untuk Kupang Yang <span className='secondary'>Bersih</span></h1>
          <div className="bodyText mt-3 ml-1">Angkut Sampah Tidak Pernah Semudah ini. Jadilah Patner dan bergabung berasama kami, ciptakan kupang yang lebih bersih dan sehat dimulai dari anda.</div>
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


    </>
  )
}
