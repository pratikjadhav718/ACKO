import wallet from './images/Wallet.png';
import mobile from './images/mobile 1.png';
import snap from './images/Hassle-free.png';

const Sub2 = () => {
    return (
       <div className='home_sub1_main'>
     
       <p style={{fontSize:"28px"}}>
       Here’s why you’ll love ACKO
       </p>
       
        <div className='home_sub2'>

        <div className='home_sub_child2'>
        <div><img src={wallet} style={{height:"120px", width:"120px", marginBottom:"28px"}}></img></div>
        <div style={{marginBottom:"28px"}}>Incredibly low premiums</div>
        <div style={{fontSize:"14px", fontWeight:"normal"}}> Insuring things that matter to you shouldn’t come at a cost. That’s why when you buy from us, you get insurance that fits your pocket.</div>        
         </div>

        
         <div className='home_sub_child2'>
        <div><img src={mobile} style={{height:"120px", width:"120px", marginBottom:"28px"}}></img></div>
        <div style={{marginBottom:"28px"}}>Incredibly low premiums</div>
        <div style={{fontSize:"14px", fontWeight:"normal"}}>Insuring things that matter to you shouldn’t come at a cost. That’s why when you buy from us, you get insurance that fits your pocket.</div>        
         </div>

         <div className='home_sub_child2'>
        <div><img src={snap} style={{height:"120px", width:"120px", marginBottom:"28px"}}></img></div>
        <div style={{marginBottom:"28px"}}>Incredibly low premiums</div>
        <div style={{fontSize:"14px", fontWeight:"normal"}}>Insuring things that matter to you shouldn’t come at a cost. That’s why when you buy from us, you get insurance that fits your pocket.</div>        
         </div>

        </div>
        </div>
    )
}

export default Sub2
