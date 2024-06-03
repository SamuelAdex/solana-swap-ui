/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'

import SolanaTextImg from '../assets/SolanaSwap.png'
import PresaleImg from '../assets/Presale Countdown.png'

const Hero = () => {
    const [launchTime, setLaunchTime] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);


    useEffect(() => {
      const target = new Date("06/15/2024 18:59:59");
  
      const interval = setInterval(() => {
        const now = new Date();
        const difference = target.getTime() - now.getTime();
  
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        setDays(d);
  
        const h = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        setHours(h);
  
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        setMinutes(m);
  
        const s = Math.floor((difference % (1000 * 60)) / 1000);
        setSeconds(s);
  
        // if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        //     setLaunchTime(true);
        // }
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

  return (
    <section className='flex flex-col items-center text-center'>
        <section className="flex flex-col gap-6 items-center text-center">
            <img src={SolanaTextImg} alt="" />
            <p className='text-white text-[16px] font-medium w-[490px]'>SolanaSwap is a decentralized application that facilitates the swapping of tokens on Solana blockchain.</p>
            <section className='flex items-center gap-16 mt-5'>
                <img src={PresaleImg} alt="" />
                <section className='flex items-center justify-evenly p-2 bg-[#000355] border-[3px] border-[#000AFF] rounded-[32px] pt-1 pb-3 justify-center w-[386px]'>
                    <div className='flex flex-col'>
                        <span className='text-[48px] text-[#EDF9D0] font-digit'>{days}</span>
                        <span className='text-[#A2A2A2] mt-[-13px] text-[12px]'>Days</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-[48px] text-[#EDF9D0] font-digit'>{hours}</span>
                        <span className='text-[#A2A2A2] mt-[-13px] text-[12px]'>Hours</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-[48px] text-[#EDF9D0] font-digit'>{minutes}</span>
                        <span className='text-[#A2A2A2] mt-[-13px] text-[12px]'>Minutes</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-[48px] text-[#EDF9D0] font-digit'>{seconds}</span>
                        <span className='text-[#A2A2A2] mt-[-13px] text-[12px]'>Seconds</span>
                    </div>
                </section>
            </section>
        </section>
    </section>
  )
}

export default Hero