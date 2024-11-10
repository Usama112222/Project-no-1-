import React from "react";
 import "./style.css"
 import pic from "../logo.png"

function Nav(){
    return( 
    <div>
        <nav class="container dark-nav">
           <img src={pic} alt="" class="logo"/>
           <ul class="hide-mobile-menu">
             <li><a>Home</a></li>
             <li><a>Program</a></li>
             <li><a>About us</a></li>
             <li><a>Campus</a></li>
             <li><a>Testimonials</a></li>
             <li><a class="btn">Contact us</a></li>
           </ul>
           <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAABQCAYAAADr/ADSAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACOSURBVHgB7d2xEYAwDARBi/57BpMwQwW+YLeFS/WjubfFZ7YVcC2ShIkSJkqYKGGihIkSJkqYKGGihIkSBgAAAAAAAAAAOGQsyprclUUJEyVMlDBRwkQJEyVMlDBRwkQJEyUMAAAAAAAAAABwSOIf18uy7c9dWZQwUcJECRMlTJQwUcJECRMlTJQwUcJEPT/mDD5eCGIPAAAAAElFTkSuQmCC" alt="" class="menu-icon"/>
        </nav>
    </div>
    )
}
export default Nav;