/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'

import {MdOutlineVisibilityOff, MdOutlineVisibility, MdKeyboardArrowDown } from 'react-icons/md'
import Button from './Button';
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";

import ConnectIcon from '../assets/connect.svg'
import ArrowImg from '../assets/arrow-transfer.svg'
import ArrowImg2 from '../assets/arrow-data-transfer.svg'
import SolanaIcon from '../assets/solana-(sol).svg'
import WalletIcon from '../assets/wallet-elements.svg'
import SolIcon from '../assets/Sollet.png'
import BitcoinIcon from '../assets/bitcoin.png'

const SwapSection = () => {
    const [hideAmount, setHideAmount] = useState(false)
  return (
    <section className='flex md:flex-row flex-col justify-center w-[80%] m-auto m-[0px] gap-4 mt-8 py-4'>
        <aside className='md:w-[400px] w-full inline-block border-[1px] border-[rgba(81,81,81,1)] p-[25px] rounded-[32px] bg-[rgba(0,2,51,0.5)]'>
            <div className='flex items-center gap-2 text-white text-[12px]'>
                <span>Wallet balance</span>
                {hideAmount == false ? <LuEye fontSize={"1rem"} onClick={()=> setHideAmount(true)} className="cursor-pointer" /> : <LuEyeOff fontSize={"1rem"} onClick={()=> setHideAmount(false)} className="cursor-pointer" />}
            </div>
            <div className='text-white mt-5 text-[40px]'>
                {hideAmount == false ? <span>$000,000,000</span>  : <span>$***,***,***</span>}                
            </div>
            <div className='mt-5'>    
                <span className='rounded-xl text-[13px] border-[1px] border-white text-white'>
                    +2.4599 <span className='border-[1px] border-white rounded-xl'>+12%</span>
                </span>
            </div>
            <Button 
                text={"Connect wallet"}
                btnStyle={"md:w-[352px] w-full p-6 mt-8 border-none"}
                imgPath={ConnectIcon}
            />
            <p className='text-[#A2A2A2] text-[14px] mt-6 w-[272px]'>Connect your wallet to start swapping on SolanaSwap, no hidden fees.</p>
        </aside>
        <aside className='md:w-[600px] w-full border-[1px] border-[rgba(81,81,81,1)] p-[25px] rounded-[32px] bg-[rgba(0,2,51,0.5)]'>
            <div className='text-white font-[600] text-[16px] uppercase'>
                <span>Swap Tokens</span>
            </div>
            <div className=''>
                <div className='flex md:flex-row flex-col mt-4 gap-4'>
                    <div className=''>
                        <div className='text-white text-[14px] flex items-center gap-4'>
                            <span>Pay with</span>
                            <div className='flex items-center gap-2'>
                                <img src={SolIcon} alt="" />
                                <MdKeyboardArrowDown fontSize={"20px"} />
                            </div>
                        </div>
                        <div className='mt-3 w-full'>
                            <div className='flex items-center gap-2 flex-[3] p-4 border-[1px] border-[rgba(81,81,81,1)] rounded-[32px] '>                                
                                <input className='border-none w-full text-[#bdbdbd] bg-transparent text-[14px] focus:outline-none active:outline-none' type="text" placeholder='Enter amount' />
                            </div>
                        </div>
                    </div>
                    <div className='flex md:flex-row flex-col md:items-end items-center'>
                        <div className='rounded-[100%] w-[48px] h-[48px] grid place-items-center p-3 bg-[#000AFF] cursor-pointer'>
                            <img src={ArrowImg2} alt="" className='w-[24px] h-[24px]' />
                        </div>                    
                    </div>
                    <div className=''>
                        <div className='text-white text-[14px] flex items-center gap-4'>
                            <span>You get</span>
                            <div className='flex items-center gap-2'>
                                <img src={BitcoinIcon} alt="" />
                                <MdKeyboardArrowDown fontSize={"20px"} />
                            </div>
                        </div>
                        <div className='mt-3 w-full'>
                            <div className='flex items-center gap-2 flex-[3] p-4 border-[1px] border-[rgba(81,81,81,1)] rounded-[32px] '>                                
                                <input className='border-none text-[#bdbdbd] w-full bg-transparent text-[14px] focus:outline-none active:outline-none' type="text" placeholder='0.00000000 BTC' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='inline-flex gap-2 items-center text-white text-[12px] mt-3'>
                    <img src={WalletIcon} alt="" />
                    <span>Balance:</span>
                    <span className='bg-[#CCCEFF] rounded-[90px] px-3 py-1 text-black'>8909 SOL</span>
                </div>
            </div>
            <div className='mt-6 border-t-[1px] border-[rgba(81,81,81,0.6)] pt-5'>
                <div className='text-white text-[14px]'>
                    <span>Enter Address</span>
                </div>
                <div className='flex md:flex-row flex-col mt-3 items-center gap-4'>
                    <div className='flex items-center gap-2 md:flex-[3] p-4 border-[1px] border-[rgba(81,81,81,1)] rounded-[32px] '>
                        <img src={SolanaIcon} alt="" />
                        <input className='border-none w-full text-[#bdbdbd] bg-transparent text-[14px] focus:outline-none' type="text" placeholder='Enter/paste Solana address' />
                    </div>
                    <Button
                        text={"Approve token swap"}
                        btnStyle={"border-none md:flex-[2] p-4 "}
                        imgPath={ArrowImg}
                    />
                </div>
            </div>
        </aside>
    </section>
  )
}

export default SwapSection