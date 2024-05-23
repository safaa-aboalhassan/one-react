import React, { Component } from 'react'

export default class Brand extends Component {
    render() {
        return (
            <div>
                <div >
                    <h2 className='text-center'>TRENDING DRAND</h2></div>
                <div className='container'>
                    <div className='row '>
                        <div className='col-2 '>

                            <img src="./images/br1.avif" alt="" className='w-100' />
                        </div>
                        <div className='col-2'>
                            <img src="./images/br2.avif" alt="" className='w-100' />
                        </div>
                        <div className='col-2'>
                            <img src="./images/br3.avif" alt="" className='w-100' />
                        </div>
                        <div className='col-2'>
                            <img src="./images/br4.avif" alt="" className='w-100' />
                        </div>
                        <div className='col-2'>
                            <img src="./images/br5.webp" alt="" className='w-100' />
                        </div>
                        <div className='col-2'>
                            <img src="./images/br6.avif" alt="" className='w-100' />
                        </div>

                    </div>
                </div>
                {/* part2 */}
                <div className='container'>
                    <div className='row flex-row-reverse   '>
                        <div className='col-6  mb-2'>
                            <div className='d-flex justify-content-end'>
                                <img src="./images/mastercard-png.webp" alt="" className=' p-1 w-imgb  ' />
                                <img src="./images/visa-png.webp" alt="" className=' p-1 w-imgb ' />
                                <img src="./images/pay-pal-png.webp" alt="" className=' p-1 w-imgb ' />
                                <img src="./images/american-express-png.webp" alt="" className=' p-1 w-imgb ' />
                                <img src="./images/visa-electron-png.webp" alt="" className=' p-1 w-imgb ' />

                            </div>
                        </div>
                        <div className='col-6'>
                            <div className=' '>
                                <i class="fab fa-instagram"></i>
                            </div>

                        </div>
                    </div>

                </div>


                {/* footer */}





            </div>
        )
    }
}
