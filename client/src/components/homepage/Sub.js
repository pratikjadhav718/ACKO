import React from 'react';
import ReactStars from "react-rating-stars-component";
import e1 from './images/Ellipse 5.png';
import e2 from './images/Ellipse 6.png';
import e3 from './images/Ellipse 7.png'

const Sub = () => {
    return (
        <div className='home_sub_bg'>
        <div className='home_sub'>
        
        <div className='home_sub_child'><ReactStars
    count={5}
    size={16}
    activeColor="#ffd700"
    color="darkgoldenrod"
  />
  <div style={{marginTop:"20px"}}>Very good experience. Got the settlement done in less than 24 hours.</div>
  <div className='sub_rate'>
  <div>
<img src={e1} style={{marginRight:"20px"}}></img>
  </div>
  <div>
  <p style={{fontSize:"small"}}>Rahul Gupta</p>
  <p style={{fontSize:"x-small", fontWeight:"normal"}}>Delhi</p>
  </div>
  </div>
  
   </div>
        

 

   <div className='home_sub_child'><ReactStars
    count={5}
    size={16}
    activeColor="#ffd700"
    color="darkgoldenrod"
  />
  <div style={{marginTop:"20px"}}>
Thank you so much for the amazing service, Special thanks to Mr. Rais Shaikh.</div>
  <div className='sub_rate'>
  <div>
<img src={e2} style={{marginRight:"20px"}}></img>
  </div>
  <div>
  <p style={{fontSize:"small"}}>Somnath Mane</p>
  <p style={{fontSize:"x-small", fontWeight:"normal"}}>Pune</p>
  </div>
  </div>
  
   </div>


   <div className='home_sub_child'><ReactStars
    count={5}
    size={16}
    activeColor="#ffd700"
    color="darkgoldenrod"
  />
  <div style={{marginTop:"20px"}}>
Hassle free insurance & quick response. Absolutely best insurance company ever</div>
  <div className='sub_rate'>
  <div>
<img src={e3} style={{marginRight:"20px"}}></img>
  </div>
  <div>
  <p style={{fontSize:"small"}}>Vinil Kumar</p>
  <p style={{fontSize:"x-small", fontWeight:"normal"}}>Hyderabad</p>
  </div>
  </div>
  
   </div>
   </div>
        </div>
    )
}

export default Sub
