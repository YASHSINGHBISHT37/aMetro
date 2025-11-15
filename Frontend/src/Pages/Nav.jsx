import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const Nav = () => {
    const [menu, setMenu] = useState(false)
    const [fromToBar, setFromToBar] = useState(false)

    const Menu = [
        { label: 'Home' },
        { label: 'Recharge' },
        { label: 'Facilities' },
        { label: 'Network' },
        { label: 'Security' },
        { label: 'Help & Contact' },
        // { label: 'Vigilance Complaint Portal' },
        { label: "FAQ's" }
    ]


    useEffect(() => {
        const scroll = () => setFromToBar(window.scrollY > 38)
        window.addEventListener('scroll', scroll)
        return () => window.removeEventListener('scroll', scroll)
    }, [])

    return (
        <div className='bg-[#161616] w-full h-14 fixed top-0 left-0 p-2 flex justify-between items-center z-99999'>

            {/* <div className='fixed bg-[#161616] w-full h-full z-9999999 top-0 left-0 flex justify-center items-center'>
                <div className='flex flex-col items-center gap-4 w-full'>
                    <img src="imgs/Metro.png" className='h-40 mb-2' />
                    <h1 className='font-bold text-[2vh] opacity-70'>Welcome to</h1>
                    <h1 className='font-bold text-4xl leading-0'>Delhi Metro</h1>
                </div>
            </div> */}

            <div className={`w-full h-full flex justify-between items-center transition-all duration-400 ease-in-out
            ${fromToBar ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
                <div className='w-full h-full flex items-center'>
                    <img src="imgs/Metro.png" className='h-full p-2' />
                    <h1 className='font-bold text-[2.4vh] cursor-pointer'>Delhi Metro</h1>
                </div>

                <img onClick={() => setMenu(true)} src="icons/menu.png" className='h-6 cursor-pointer active:opacity-60   ' />
            </div>

            {/*From-To-Bar*/}
            <div className={`Station absolute left-0 top-0 w-full h-full leading-5 font-bold tracking-wide text-[2vh] transition-all duration-400 ease-in-out flex justify-center items-center
                ${fromToBar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
                <div className='flex items-center justify-around w-full'>
                    <span className='text-left w-[45%] break-word pr-3'>Sir Vishweshwaraiah Moti Bagh</span>
                    <img src="icons/arrow.png" className=' absolute h-7 mx-2 ml-3 rotate-90 border rounded-full border-white/30 p-1 bg-blue-500' />
                    <h1 className='text-right w-[45%] break-word pl-4'>Hazrat  Nizzamuddin Railway Station</h1>
                </div>
            </div>

            {/*Menu*/}
            <AnimatePresence>
                {menu && (
                    <div className='fixed w-full h-full top-0 right-0 px-2 py-2 flex justify-end items-end'>

                        <motion.div
                            key="overlay-bg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.7 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed top-0 left-0 w-screen h-screen bg-[#161616] z-50"
                            onClick={() => setOpenNotify(false)}
                        />

                        <motion.div
                            key="notify-overlay"
                            initial={{ y: "100%", opacity: 1 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "100%", opacity: 1 }}
                            transition={{ type: "spring", stiffness: 120, damping: 20 }}
                            className='bg-[#161616] w-full h-80 py-3 rounded-3xl border border-white/20 relative z-9999999 flex flex-col justify-between'>

                            <div>
                                <div className="flex justify-between items-center px-4 pb-2 overflow-auto border-b border-white/30">
                                    <motion.h1
                                        key='Menu'
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 0.8, y: 0 }}
                                        exit={{ opacity: 0, y: 50 }}
                                        transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.1 }}

                                        className="text-2xl font-bold">Menu</motion.h1>
                                    <motion.img
                                        initial={{ opacity: 0, x: 30, rotate: 180 }}
                                        animate={{ opacity: 1, x: 0, rotate: 0 }}
                                        exit={{ opacity: 0, x: 30, rotate: 180 }}
                                        transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.1 }}

                                        onClick={() => setMenu(false)}
                                        src="icons/close.png"
                                        className="cursor-pointer h-6" />
                                </div>

                                <div className='mt-3 px-4 pb-10 -space-y-1 '>
                                    {Menu.map((item, i) => (
                                        <div className='overflow-hidden'>
                                            <motion.h1
                                                key='Menu'
                                                initial={{ opacity: 0, x: -110 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -110 }}
                                                transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.1 }}
                                                className='active:text-blue-500'>{item.label}</motion.h1>
                                        </div>
                                    ))}

                                </div>
                            </div>

                            <div className='text mt-4 flex items-center justify-between opacity-60 text-[1.4vh] border-t border-white/20 pt-2  px-4'>
                                <div className="flex justify-between items-start overflow-auto px-2">
                                    <motion.h1
                                        key='Notification'
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 50 }}
                                        transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.1 }}>
                                        © 2025 . All rights are reserved</motion.h1>
                                </div>

                                <div className="flex justify-between items-start overflow-auto px-2">
                                    <motion.h1
                                        key='Notification'
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 50 }}
                                        transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.1 }}
                                        className='cursor-pointer active:text-blue-500'>
                                        Devloped by Yash Singh Bisht</motion.h1>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                )}
            </AnimatePresence>

        </div>
    )
}

export default Nav
