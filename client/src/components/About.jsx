import React, { useEffect, useRef } from 'react';
import '../styles/about.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import blockchainIcon from '../assets/blockchain-icon.svg';
import dostBuilding from '../assets/dost-building.jpg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    
    const sectionsRef = useRef(null);

    useEffect(() => {
        const sections = Array.from(sectionsRef.current.children);

        gsap.to(sections, {
        xPercent: -130 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
            trigger: sectionsRef.current,
            pin: true,
            scrub: 1,
            end: '+=3000',
            // snap: 1 / (sections.length - 1),
            // markers: true,
        },
        });
    }, []);

    return (
        <div id='about-section' className='about'>
            <div className='about-container' ref={sectionsRef}>
                <section>
                    <div className='about-content'>
                        <h1>About</h1>
                        <p>
                            I am a graduating student who wants to pursue a career as a Web Developer specializing on blockchain Dapps. I use MERN Stack as it use mostly by modern APIs for blockchain development. I have developed a Website with a minting page for an NFT Project before, also I have developed a Web-based Voting System through Blockchain Technology in Polygon Mumbai Testnet as our capstone project.
                        </p>
                    </div>
                    <div className='about-side'>
                        <div className='arrow-right'><svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" d="m359.873 121.377l-22.627 22.627l95.997 95.997H16v32.001h417.24l-95.994 95.994l22.627 22.627L494.498 256L359.873 121.377z"/></svg></div>
                        <div className='blockchain'>
                            <img src={blockchainIcon} alt="blockchain" />
                        </div>
                    </div>
                    <div className='circle1'></div>
                    <div className='circle2'></div>
                </section>

                <section>
                    <div className='about-ojt-dost'>
                        <div className='title'>
                            <h1>Student Trainee at DOST3</h1>
                        </div>
                        <div className='contents'>
                            <div className='title-div'>
                                <p>I took my On-the-job training in the Department of Science and Technology Regional Office No. 3 (DOST3) as a student trainee under the Management Information System Unit in the Software and System Development Section. Here, I have developed an ICT Inventory System using PHP and MySQL and learned a lot of things about working in government and different soft skills.</p>
                            </div>
                            <div className='image-div'>
                                <img src={dostBuilding} alt="dost-building" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className='next'>
                <h1>You reach the end!</h1>
            </div>
        </div>
    )
}

export default About
