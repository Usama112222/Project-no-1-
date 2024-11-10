import React from "react";
import "./style.css"
import pic1 from "../program-1.png"
import pic2 from "../program-2.png"
import pic3 from "../program-3.png"

function Program(){
    return( 
    <div >
       <div class="title">
         <p>Our PROGRAM</p>
         <h2>What We Offer</h2>
       </div>

        <div class="programs">
             <div class="program">
             <img src={pic1} alt="picture 1" />;

                   <div class="caption">
                       <img src="data:image/png;base64,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" alt=""></img>
                       <p>Graduation Degree</p>
                    </div>
                </div>

                <div class="program">
                <img src={pic2} alt="picture 1" />;
                    <div class="caption">
                        <img src="data:image/png;base64,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" alt=""></img>
                        <p>Masters Degree</p>
                    </div>
                </div>
                        
                <div class="program">
                <img src={pic3} alt="picture 1" />;
                    <div class="caption">
                        <img src="data:image/png;base64,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" alt=""></img>
                        <p>Post Graduation</p>
                    </div>
                </div>
        </div>
   </div>
    )
}

export default Program;