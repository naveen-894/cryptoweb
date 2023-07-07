import React from 'react'

function Card({data}) {
    return (
        <div style={{width:'28.2%'}}>
            <div className='cardBackground'>
                <img src={data.image} alt="" />
            </div>
            <div className='bg-dark text-light p-2 position-relative'>
                <div className='d-flex justify-content-between'>

                <div>
                    <p className='py-2 m-0'>Splash Statue</p>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="32" viewBox="0 0 20 32" fill="none">
                            <path d="M9.99657 0L0 16.2966L9.99657 11.833V0Z" fill="white" />
                            <path d="M9.99657 11.8328L0 16.2963L9.99657 22.1027V11.8328Z" fill="white" />
                            <path d="M19.9944 16.2966L9.99597 0V11.833L19.9944 16.2966Z" fill="white" />
                            <path d="M9.99597 22.1027L19.9944 16.2963L9.99597 11.8328V22.1027Z" fill="white" />
                            <path d="M0 18.16L9.99657 32.0001V23.9628L0 18.16Z" fill="white" />
                            <path d="M9.99597 23.9628V32.0001L20 18.16L9.99597 23.9628Z" fill="white" />
                        </svg>
                        <span className='ml-2'>{data.price} ETH</span>
                    </div>
                </div>
                <div className='position-relative ml-3'>
                    <div className='img1'>
                    <img src="/girl1.png" alt="" width={200}/>
                    </div>
                    <div className='img2'>
                    <img src="/girl2.png" alt="" width={200}/>
                    </div>
                    <div className='img3'>
                    <img src="/girl3.png" alt="" width={200}/>
                    </div>
                </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <button className='px-3 py-1 bidButton'>Bid Now</button>
                </div>
            </div>
        </div>
    )
}

export default Card