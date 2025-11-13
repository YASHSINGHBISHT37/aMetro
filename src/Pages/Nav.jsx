import { tr } from 'framer-motion/client'
import React, { useState } from 'react'

const Nav = () => {
    const [menu, setMenu] = useState(false)
    return (
        <div className='bg-[#161616] w-full h-14 fixed top-0 left-0 p-2 flex justify-between items-center z-99999'>

            <div className='w-full h-full flex justify-between items-center'>
                <div className='w-full h-full flex items-center'>
                    <img src="imgs/Metro.png" className='h-full p-2' />
                    <h1 className='font-bold text-[2.4vh] cursor-pointer'>Delhi Metro</h1>
                </div>

                <img onClick={() => setMenu(true)} src="icons/menu.png" className='h-6 cursor-pointer active:opacity-60   ' />
            </div>
            {/* <div className='Station leading-5 font-bold tracking-wide text-[2vh]relative'>
                <div className='flex items-center justify-around w-full'>
                    <span className='text-left w-[45%] break-word pr-3'>Sir Vishweshwaraiah Moti Bagh</span>
                    <img src="icons/arrow.png" className=' absolute h-7 mx-2 ml-3 rotate-90 border rounded-full border-white/30 p-1 bg-blue-500' />
                    <h1 className='text-right w-[45%] break-word pl-4'>Hazrat  Nizzamuddin Railway Station</h1>
                </div>
            </div> */}

            {menu && (
                <div className='fixed w-full h-full top-0 right-0 backdrop-blur-[0.6vh] p-4 flex justify-end items-end pb-20'>
                    <div className='bg-[#161616] w-full h-auto p-3 px-0 rounded-3xl border border-white/20'>

                        <div className='flex justify-between items-center border-b pb-2 border-white/20 px-4'>
                            <h1 className='font-bold text-2xl opacity-60'>Menu</h1>
                            <img onClick={() => setMenu(false)} src="icons/close.png" className='h-6 cursor-pointer active:opacity-60' />
                        </div>

                        <div className='mt-5 px-4'>
                            <h1>Home</h1>
                            <h1>Recharge</h1>
                            <h1>Facilities</h1>
                            <h1>Network</h1>
                            <h1>Security</h1>
                            <h1>Help & Contact</h1>
                            <h1>Vigilance Complaint Portal</h1>
                            <h1>FAQ’s</h1>
                        </div>

                        <div className='text mt-4 flex items-center justify-between opacity-70 text-[1.4vh] border-t border-white/20 pt-2  px-4'>
                            <h1>© 2025 . All rights are reserved</h1>
                            <h1 className='cursor-pointer active:text-blue-500'>Devloped by Yash Singh Bisht</h1>
                        </div>
                    </div>

                </div>
            )}

        </div>
    )
}

export default Nav
