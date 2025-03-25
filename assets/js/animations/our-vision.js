export function ourVisionAnimation(isMobile) {
    
    gsap.registerPlugin(ScrollTrigger);

    const opacityImage = 1;
    const waitTime = 1.5;
    const scrollExpand = "+=270%"


    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#wrapper-vision",
            start: "top top",
            end: scrollExpand,
            scrub: 0.2,
            pin: "#wrapper-vision",
            pinSpacing: "margin",
            onEnter: () => console.log("onEnter"),
            onLeave: () => {

                const wrapperVision = document.getElementById("wrapper-vision");
                wrapperVision.style.position = "sticky";
                wrapperVision.classList.add("reset-translate");


                const pin = document.querySelector(".pin-spacer:has(#wrapper-vision)")

                pin.style.position = "sticky";
                pin.style.inset = "0";


                console.log("Add Class / / OnLeave");

            },
            onEnterBack: () => {

                const wrapperVision = document.getElementById("wrapper-vision");
                wrapperVision.classList.remove("reset-translate");

                console.log("Remove Class / / onEnterBack");
            },
            onLeaveBack: () => {

                const pin = document.querySelector(".pin-spacer:has(#wrapper-vision)")

                pin.style.position = "relative";
                pin.style.inset = "unset";


                console.log("onLeaveBack")
            },

        }
    })

    tl
        .to({}, { duration: waitTime })

        /* Step 1 */
        .to(".vision-text-1", {
            opacity: 0,
            display: "none"
        })

        /* Step 2 */

        // Show image 2
        .to("#wrapper-vision>.img-2", {
            opacity: opacityImage,
        })

        .to(".vision-text-2", {
            opacity: 1,
            display: "block"
        }, "<");

    if (!isMobile) {
        tl.to(".vision-logo-dahan", {
            left: "50%",
            x: "-50%"
        }, "<")
    }

    tl.to({}, { duration: waitTime })

        .to(".vision-text-2", {
            opacity: 0,
            display: "none"
        })

        /* Step 3 */

        // Show image 3
        .to("#wrapper-vision>.img-3", {
            opacity: opacityImage,
        })

        .to(".vision-text-3", {
            opacity: 1,
            display: "block"
        }, "<");

    if (!isMobile) {
        tl.to(".vision-logo-dahan", {
            left: "0%",
            x: "0%"
        }, "<")
    }

    // Se agrega un "espacio extra" de scroll para permitir ver el final de la animación antes de continuar
    tl.to({}, { duration: waitTime });
}
