import { nosotrosAnimation } from "./nosotros.js";
import { ourVisionAnimation } from "./our-vision.js";

document.addEventListener("DOMContentLoaded", (event) => {

    gsap.registerPlugin(ScrollTrigger);

    const isMobile = window.outerWidth < 720;
    
    
    // Animaciones...
    nosotrosAnimation(isMobile);
    ourVisionAnimation(isMobile);


});