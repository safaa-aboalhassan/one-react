import React, { Component } from 'react';


export default class Part3 extends Component {
  render() {
    return (
      <div>
        <br />
        <div class="row w-100 h-100 flex-row-reverse">
<div class="col-3">
    
<img src="./images/img1.avif" alt="" className='w-100 m-1 p-1' />
<h4 className='text-center'>ACCASIONWEAR</h4>
<p className='text-center'>Breack the address code</p>
</div>

<div class="col-3">
<img src="./images/img2.avif" alt="" className='w-100 m-1 p-1' />
<h4 className='text-center'>SUMMER SHOWS</h4>
<p className='text-center'>ft.Sandal,slider,more</p>
</div>

<div class="col-3">
<img src="./images/img3.avif" alt="" className='w-100 m-1 p-1' />
<h4 className='text-center'>THE COUTURE CLUB</h4>
<p className='text-center'>Summer=styled</p>
</div>
<div class="col-3">
<img src="./images/img4.avif" alt="" className='w-100 m-1 p-1' />
<h4 className='text-center'>LAWAN SPORTS</h4>
<p className='text-center'>High low dressing made easy</p>

</div>
</div>

{/* green part */}

<div className='green text-center  p-5  rounded-5 '>
<h2>UP TO 30% OF TEES,SHORTS AND MORE!</h2>
<p>limited tim only.Selcted stylesmarkesdown on side</p>
</div>
{/* part 4 */}
<div className='container'>
<div className='row'>
<div className='col-6'>
<img src="./images/img5.webp" alt=""  className='w-100 m-1 pb-2 '/>
<div className='text-center'>
<h2 className='text-center'>NEW IN :SWIM</h2>
<p className='text-center'>soak up summer</p>
<button className='btn btn-outline-dark border-2 border-black px-5 p-3'>SHOP NOW</button>
</div>
</div>
<div className='col-6'>
<img src="./images/img6.webp" alt="" className='w-100 m-1 pb-2' />
<div className='text-center'>
<h2 className='text-center'>DESIGNY| ASOS DESIGN</h2>
<p className='text-center'>the ecxclusive drop</p>
<button className='btn btn-outline-dark border-2 border-black  px-5 p-3'>SHOP NOW</button>
</div>
</div>
</div>
</div>
{/* part5 */}
<div className='green text-center rounded-2'>
<h2><button className='btn btn-outline-light border-2 text-dark border-black  my-2 px-4'>THE ASOC APP</button></h2>
<h2>Notifications on your orders and returns? <br />APP Solutly</h2>
<button className='btn btn-dark px-3 px-5 bold my-3'>DOWNLOAD NOW</button>
</div>

</div>
   
      
    )
  }
}
