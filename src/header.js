import React from 'react'
import Earth from "./lp2_Images/earth.png"
import Bg from "./lp2_Images/images/background.png"
import Rock from "./lp2_Images/images/rock.png"
import foreground from "./lp2_Images/images/foreground.png"
import mid from "./lp2_Images/images/mid.png"

const header = () => {
    return (
        <div>
        <div class="rocket">
  </div>
        <section id="sectionone" className="screen">
      <div id="scene">
         
        <div className="bg">
          <img src={Bg} alt="" />
        </div>
        <div className="rock1">
          <img src={Rock} alt="" />
        </div>
        <div className="earth">
          <img src={Earth} alt="" />
        </div>
        <div className="text">
          <h1>SPACE<span>X</span></h1>
        </div>
        <div className="mid">
          <img src={mid} alt="" />
        </div>
        <div className="fore">
          <img src={foreground} alt="" />
        </div>
      
    
        </div>
    </section>
        </div>
    )


  }


export default header
