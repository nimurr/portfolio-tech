'use client'
import React from 'react';

const Hero = () => {
    return (
        <section id='hero'>
            <div className='bgImageUseBanner w-[98%] mx-auto rounded-xl overflow-hidden flex items-end'>
                <div className='containerCustom'>
                    <div>
                        <h2 className='flex border uppercase items-center border-[#ffffff25] w-fit rounded-full py-1 px-3 backdrop-blur-xl bg-[#ffffff23]'>
                            <img className='mr-2 w-5' src="https://img.icons8.com/?size=48&id=YMqRHr9A2OZh&format=png" alt="" />
                            business & solution
                        </h2>
                        <h1 className='lg:text-8xl text-5xl font-bold my-5'>The AI-powered Customer <br /> Service Platform</h1>
                        <p className='text-xl text-[#1b0c25] my-10'>Fluence AI helps you connect, manage, and optimize your AI tools effortlessly. Unlock powerful <br />  insights and automate complex processes with ease.</p>
                        <div>
                            <button className='mr-5 cursor-pointer bg-[#1b0c25] text-white py-3 px-8 rounded-xl'>Get Started</button>
                            <button className='mr-5 cursor-pointer backdrop-blur-xl bg-[#ffffff0a] border border-[#ffffff25] text-white py-3 px-8 rounded-xl'>Book a Demo</button>
                        </div>
                    </div>
                    <div className='h-[60vh] w-full border-[1px] border-[#ffffff25] rounded-t-4xl mt-10 backdrop-blur-xl '>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
