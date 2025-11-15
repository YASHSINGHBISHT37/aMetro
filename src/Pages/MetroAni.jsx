import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const MetroAni = () => {
    return (
        <div className='w-full h-auto relative z-99999'>
            {/*Metro Animation*/}
            <AnimatePresence>
                <div className='h-26 bg-amber-00 overflow-hidden relative'>
                    <img src="icons/metroBack.png" className='h-full -z-1' />

                    <motion.img
                        animate={{ x: [600, 0, 0, -600, 0, 0, 600] }}
                        transition={{
                            duration: 30, times: [0, 0.10, 0.20, 0.45, 0.50, 0.60, 0.70, 0.95, 1], repeat: Infinity, ease: 'easeInOut'
                        }}
                        src="icons/metroLayer.png"
                        className='h-full absolute z-3 top-0 left-0' />

                    <img src="icons/metroFront.png" className='h-full z-6 absolute top-0 left-0' />
                </div>
            </AnimatePresence>
        </div>
    )
}

export default MetroAni
