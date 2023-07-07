import Image from 'next/image'
import styles from './page.module.css'
import Card from '@/components/Card'
import Card2 from '@/components/Card2'
import Footer from '@/components/Footer'


export default function Home() {
  const data = [
    {
      image: '/man.png',
      price: 3.2,
    },
    {
      image: '/globe.png',
      price: 3.5,
    },
    {
      image: '/difglob.png',
      price: 5.0,
    }
  ]
  return (
    <main className=''>
      <div className='mainHeader'>
        <nav class=" px-3 d-flex justify-content-around py-2 align-items-center">
          <div className='d-flex'>
            <img className='rounded-circle' src="https://res.cloudinary.com/practicaldev/image/fetch/s--FngxBeeG--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/438512/05566172-2f64-49e4-a980-5996d8a0e0ab.jpg" alt="" width={30} height={30} />
            <h4 className='m-0 mx-2'>Havas</h4>
          </div>

          <div className='d-flex justify-content-between align-items-center'>
            <p className='px-3 mx-1 my-0'>Home</p>
            <p className='px-3 mx-1 my-0'>Services</p>
            <p className='px-3 mx-1 my-0'>creators</p>
            <p className='px-3 mx-1 my-0'>About</p>
          </div>
          <div>
            <button type="button" class="btn btn-warning mx-2">Primary</button>
            <button type="button" class="btn btn-secondary mx-2">Secondary</button>
          </div>
        </nav>
        <div className='section'>
          <div>
            <img src="/nft.jpeg" alt="" width={400} height={400}/>
          </div>
          <div>
            <h2 className='text-light m-0'>Cryptocurrency </h2>
            <h4 className='text-light mb-3'>just got even better </h4>
            <p className='text-light m-0'>Best nft collection freelance services online.</p>
            <p className='text-light m-0'>Outsource your nft collection project and get it </p>
            <p className='text-light m-0'>quickly done and delivered remotely online.</p>
          </div>
          <div>

          </div>
        </div>
      </div>
      <div className='section1'>
        <div>
          <div className='mb-3'>New collection</div>
          <h4>Weekly Top NFT's</h4>
          <div className='d-flex justify-content-between'>
            <p>Outsource your nft collection project and get it quickly done and delivered remotely online.</p>
            <div>
              <img src="/arrows.svg" alt="" />
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-between py-3 my-3'>
          {
            data?.map(e => (

              <Card data={e} />
            ))
          }
        </div>
      </div>
      <div className='section2'>
        <h1 className='my-3 py-3'>Our Top  Creator’s Words</h1>
        <div className='d-flex align-items-center'>
          <div className='p-3 border border-light rounded card1' style={{ width: '350px' }}>
            <div>
              <p className='mb-3 py-3'>Jason Roy</p>
              <p>Sr. Designer</p>
            </div>
            <div>
              <img src="/badge.svg" alt="" width={200} />
              <h2 className='text-center'>Expert</h2>
            </div>
          </div>
          <div className='d-flex flex-column' style={{ margin: '10px 176px 10px 10px;' }}>
            <p className=''>NFT will open thousands of new opportunities for this new generation. I feel so proud and blessed that I have seen and taken advantage of many great opportunities in this world before millions of people have seen them.</p>
            <img src="/stars.png" alt="" width={100} />
          </div>
        </div>
        <div className='manimg' >
          <img src="/L3man.png" alt="" className='mx-2' />
          <img src="/L2man.png" alt="" className='mx-2' />
          <img src="/L1man.png" alt="" className='mx-2' />
          <img src="/Mman.png" alt="" className='mx-2' />
          <img src="/R1man.png" alt="" className='mx-2' />
          <img src="/R2man.png" alt="" className='mx-2' />
          <img src="/R3man.png" alt="" className='mx-2' />
        </div>
        <div className='section1'>
        <div>
          <div className='mb-3'>New collection</div>
          <h4>View Creator’s Collections</h4>
        </div>
        <div className='d-flex justify-content-between py-3 my-3'>
          {
            data?.map(e => (

              <Card2 data={e} />
            ))
          }
        </div>
      </div>
      </div>
      <Footer/>
    </main>
  )
}
