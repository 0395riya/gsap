import React, {useEffect} from 'react'
import { gsap } from "gsap";
import '../App.css'

const Testcircle = () => {

    useEffect(() => {
        gsap.set("svg", { opacity: 1 });

        gsap.to(".balls", {
            keyframes: {
                "0%": { yPercent: 0, scaleX: 1, scaleY: 1, ease: "sine.out" },
                "7%": { yPercent: 5, scaleX: 0.9, scaleY: 1.1, ease: "sine.in" },
                "25%": { yPercent: 100, scaleX: 1.15, scaleY: 0.9, ease: "sine.in" },
                "50%": { yPercent: 500, scaleX: 1, scaleY: 1, ease: "none" },
                "60%": { scaleX: 1.6, scaleY: 0.4, ease: "none" },
                "65%": { yPercent: 500, scaleX: 1, scaleY: 1, ease: "sine.out" },
                "100%": { yPercent: 0, scaleX: 1, scaleY: 1, ease: "sine.out" }
            },
            duration: 2,
            repeat: -1,
            transformOrigin: "center bottom"
        })
    
        gsap.to(".shadow", {
            scale: 0.7,
            duration: 0.4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            transformOrigin: "center"
        });
    
    }, [])

    

    return (
        <>
            
                <svg viewBox="0 0 100 200">
                    <ellipse class="shadow" cx="50" cy="188" rx="15" ry="5" />

                    <circle class="balls" cx="50" cy="22" r="15" />
                </svg>
            
        </>
    )
}

export default Testcircle