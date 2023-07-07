import React from 'react'

function Footer() {
  return (
    <div className='text-white footer' style={{backgroundColor:'black'}}>
      <div className='d-flex'>
        <img className='rounded-circle' src="https://res.cloudinary.com/practicaldev/image/fetch/s--FngxBeeG--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/438512/05566172-2f64-49e4-a980-5996d8a0e0ab.jpg" alt="" width={30} height={30} />
        <h4 className='m-0 mx-2'>Havas</h4>
      </div>
      <h3 className='my-3'>Start Working With Us</h3>
      <form class="form-inline my-2 my-lg-0">
        <input class="" type="search" placeholder="Search" aria-label="Search" />
        <button class="mx-3 bidButton" type="submit">Search</button>
      </form>
      <div className='d-flex'>
        <div>
          <p className='my-3'>High level experience in crypto currencies and NFT’s knowledge, providing great profit.</p>
          <p>Follow Us</p>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        <div className='mx-3'>
          <p>a</p>
          <p>b</p>
          <p>c</p>
          <p>d</p>
        </div>
        <div>
          <p>a</p>
          <p>b</p>
          <p>c</p>
          <p>d</p>
        </div>
      </div>
    </div>
  )
}

export default Footer