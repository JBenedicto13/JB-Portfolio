import React, { useEffect } from 'react';
import '../styles/about.css';
import blockchainIcon from '../assets/blockchain-icon.svg';
import '../gsap';

const About = () => {

    return (
        <div className='about'>
            <div className='about-container scrollx'>
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
                </section>

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
                </section>

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
                </section>
            </div>
        </div>
    )
}

export default About
