import React from "react";
import "./style.css"
import pic1 from "../gallery-1.png"
import pic2 from "../gallery-2.png"
import pic3 from "../gallery-3.png"
import pic4 from "../gallery-4.png"

function Campus(){
    return(
  <div>
       <div class="title">
          <p>Gallery</p>
          <h2>Campus Photos</h2>
        </div>

        <div class="campus">
            <div class="gallery">
              <img src={pic1} alt=""/>
              <img src={pic2} alt=""/>
              <img src={pic3} alt=""/>
              <img src={pic4} alt=""/>
            </div>
            <button class="btnsee">See more here <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAeCAYAAABnuu2GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADPSURBVHgB7dnRDYJAEEXRpxVYAiXQgpVICVqB2IEdaAeUQAlrB9iBdjDOyPqhm2yCX7xhTzIJhITkBgJkAWZIRDY6vYw624cHGtLItzA1bo15+o2odTqwi7dikNQF7LzHVTrD0uKOYFfiWJU4VhpR6zyWFrez46u4cUb6GcOssbBBNyr48rSPYE9X6uMddtC5w5cTWGUeHnuwykS1YJV5QbdgVaJYlCgWmagrWMm4mOMyKriKMpKuBJsw5RwsK8E3nS3YxVuxi1eqlz9+SrwAYrdvIKJt0HIAAAAASUVORK5CYII="
            alt=""/></button>
     </div>
  </div>
    )
}
export default Campus;