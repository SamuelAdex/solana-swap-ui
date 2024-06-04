/* eslint-disable no-unused-vars */
import React from 'react'

import SolanaIcon from '../assets/SolanaIcon.png'
import avatar from '../assets/Avatar.png';
import SearchIcon from '../assets/search-normal-1.png';
import Qrcode from '../assets/qr-code.png';

const Header = () => {
  return (
    <header className='bg-[rgba(0,3,85,1)] flex items-center justify-between p-4 px-10 text-white'>
        <img src={SolanaIcon} alt="" />
        <section className='flex items-center gap-8'>
            <img src={SearchIcon} className='md:flex hidden' alt="" />
            <img src={Qrcode} className='md:flex hidden' alt="" />
            <img src={avatar} alt="" />
        </section>
    </header>
  )
}

export default Header