export function nosotrosAnimation(isMobile) {

    gsap.registerPlugin(ScrollTrigger);

    const waitTime = 1.5;
    const scrollExpand = "+=175%"

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#nosotros",
            start: "top top",
            end: scrollExpand,
            scrub: 0.2,
            pin: "#nosotros",
            pinSpacing: "margin",
            onEnter: () => console.log("onEnter"),
            onLeave: () => {

                const wrapperVision = document.getElementById("nosotros");
                wrapperVision.style.position = "relative";
                wrapperVision.classList.add("reset-translate");


                const pin = document.querySelector(".pin-spacer:has(#nosotros)")

                pin.style.position = "sticky";
                pin.style.inset = "0";


                console.log("Add Class / / OnLeave");

            },
            onEnterBack: () => {

                const wrapperVision = document.getElementById("nosotros");
                wrapperVision.classList.remove("reset-translate");

                console.log("Remove Class / / onEnterBack");
            },
            onLeaveBack: () => {

                const pin = document.querySelector(".pin-spacer:has(#nosotros)")

                pin.style.position = "relative";
                pin.style.inset = "unset";


                console.log("onLeaveBack")
            },

        }
    })

    tl.to({}, { duration: waitTime });

    if(isMobile) {
        const paragraphs = document.querySelectorAll("#nosotros .nosotros__container > p")

        paragraphs.forEach(p => {
            /* tl.to(p, {
                
            }) */
        })

        tl.to("#nosotros .nosotros__container > .nosotros-texts > p:nth-child(1)", {
            opacity: 0
        })
        
        
        .to("#nosotros .nosotros__container > .nosotros-texts > p:nth-child(2)", {
            opacity: 1
        })
        
        .to({}, { duration: waitTime })
        
        .to("#nosotros .nosotros__container > .nosotros-texts > p:nth-child(2)", {
            opacity: 0
        })
        
        tl.to("#nosotros .nosotros__container > .nosotros-texts > p:nth-child(2)", {
            display: "none"
        }, "<")

        .to("#nosotros .nosotros__container > .nosotros-texts > p:nth-child(3)", {
            opacity: 1
        })
        
        .to({}, { duration: waitTime })

        .to("#nosotros .nosotros__container > .nosotros-texts > p:nth-child(3)", {
            opacity: 0
        })

        tl.to("#nosotros .nosotros__container > .nosotros-texts > p:nth-child(3)", {
            display: "none"
        }, "<")
        
        tl.to("#nosotros .nosotros__container > .nosotros-texts > p:nth-child(1)", {
            display: "none"
        }, "<")
        
        tl.to(".nosotros__image>img", {
            height: "auto"
        })
    }

    if(isMobile){

        tl.
        to(".nosotros__image>img", {
            opacity: 1,
            y: "-40px"
        });
    } else {
        
        tl.
        to(".nosotros__image>img", {
            opacity: 1,
            y: "0px"
        });
    }
    
    tl.to({}, { duration: waitTime });
}