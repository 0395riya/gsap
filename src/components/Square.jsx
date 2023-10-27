import React, { useEffect } from 'react'
import './TestCircle.css'
import { gsap } from 'gsap/gsap-core'

const Square = () => {
    useEffect(() => {
        gsap.to(".box", {
          keyframes: {
            y: [0, 80, -20, 30, 0],
            ease: "none",
            easeEach: "power2.inOut",
          },
          rotate: 180,
          ease: "elastic",
          duration: 2,
          repeat: -1,
          stagger: 0.2,
        });

        // let tl = gsap.timeline();
        // tl.to(".box", {
        //     x: 100
        // })
        //     .to(".box", {
        //         y: 100
        //     })
        //     .to(".box", {
        //         x: 0
        //     })
        //     .to(".box", {
        //         y: 0
        //     });

        // Array-based keyframes
        // gsap.to(".box", {
        //   keyframes: {
        //     x: [0, 100, 100, 0, 0],
        //     y: [0, 0, 100, 100, 0],
        //     ease: "power1.inOut"
        //   },
        //   duration: 2,
        //   repeat: -1
        // });

        // gsap.to(".box", {
        //     keyframes: {
        //         "25%": { x: 200, y: 0 },
        //         "50%": { x: 200, y: 200, ease: 'power3.in' },
        //         "75%": { x: 0, y: 200 },
        //         "100%": { x: 0, y: 0 },
        //         easeEach: 'none',
        //         ease: 'power3.out'
        //     },
        //     duration: 4,
        //     repeat: -1,
        //     ease: 'elastic.in',
        //     rotate: 360
        // })

        // gsap.to(".box", {
        //     keyframes: [
        //         {x: 100, duration: 1, ease: 'sine.out'}, // finetune with individual eases
        //         {y: 200, duration: 1, delay: 0.5}, // create a 0.5 second gap
        //         {rotation: 360, duration: 2, delay: -0.25} // overlap by 0.25 seconds
        //        ],
            
        //     repeat: -1,
        //     ease: 'expo.inOut',
        //     // rotate: 360
        // })
        // gsap.to(".box", {
        //     keyframes: {
        //      "0%":   { x: 100, y: 100},
        //      "75%":  { x: 0, y: 0, ease: 'sine.out'}, // finetune with individual eases
        //      "100%": { x: 50, y: 50 },
        //       easeEach: 'expo.inOut' // ease between keyframes
        //     },
        //     ease: 'none', // ease the entire keyframe block
        //     duration: 2,
        //    })
    }, []);


    return (
        <>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
        </>
    )
}

export default Square