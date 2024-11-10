import React from "react";
import "./style.css"
import aboutpic from "../about.png"
import play from "../play-icon.png"

function About(){
    return(
    
        <div class="about">
            <div class="about-left">
                <img src={aboutpic} alt="about1" class="about-img"/>
                <img src={play} alt="play icon" class="play-icon"/>
            </div>
                
            <div class="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>Embark on a transformative educational journey with our university's comprehensive education programs. 
                Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed
                to excel in the dynamic field of education.</p>
                <p>With a focus on innovation, hands-on learning, and personalized
                mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
                <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs
                 offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
            </div>
            
        </div>
        
    )
}
export default About;