import { div } from 'framer-motion/client'
import React, { useState } from 'react'
import Route from '../Components/Details/Route'

const Details = () => {
    const data = [
        { label: 'Fare', data: '₹43', img: 'fare.png' },
        { label: 'Time', data: '129 min', img: 'time.png' },
        { label: 'Stations', data: '14', img: 'stations.png' },
        { label: 'Line Change', data: '3', img: 'lineChange.png' },
        // { label: 'Last', data: '11:02 Pm' },
        // { label: 'Phone', data: '8800793133' },
    ]

    const [highLight, setHightLight] = useState('time')

    return (
        <div className='relative w-full h-auto bg-[#161616] pb-30 px-2 pt-2'>
            <div className='h-full overflow-scroll'>
                <div className='Station leading-5 font-bold tracking-wide text-[2vh] mb-10 relative'>
                    <div className='flex items-center justify-around w-full'>
                        <span className='text-left w-[45%] break-word pr-3'>Sir Vishweshwaraiah Moti Bagh</span>
                        <img src="icons/arrow.png" className=' absolute h-7 mx-2 ml-3 rotate-90 border rounded-full border-white/30 p-1 bg-blue-500' />
                        <h1 className='text-right w-[45%] break-word pl-4'>Hazrat  Nizzamuddin Railway Station</h1>

                    </div>
                </div>


                <div className='Data flex flex-wrap items-center justify-between gap-2 px-4 mb-4'>
                    {data.map((item, i) => (
                        <div key={i} className='flex items-center space-x-1 px-3 text-[1.7vh] py-1.5 border border-white/20 rounded-[2vh] w-44 bg-gray-400/14'>
                            <img src={`icons/${item.img}`} className=' borde o border-white/30 p-2 w-10 h-10 opacity' />
                            <div className='leading-4.5'>
                                <h1 className='font-bold opacity-70'>{item.label}</h1>
                                <h1 className='text-[2vh]'>{item.data}</h1>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='px-10 flex justify-center items-center'>
                    <div className='relative flex justify-between items-center text-[1.7vh] border p-1.5 w-72 h-11 rounded-full border-white/30 overflow-auto'>
                        <div className={`highLight bg-blue-500 border border-white/10 rounded-full w-1/2 h-8 -translate-y-1/2 absolute top-1/2 left-1.5 transition-all duration-300 ease-in-out
                            ${highLight === 'lineChange' ? 'translate-x-33' : 'translate-x-0'}`}></div>
                        <h1 onClick={() => setHightLight('time')} className='relative w-34 text-center cursor-pointer'>Min. Time</h1>
                        <h1 onClick={() => setHightLight('lineChange')} className='relative w-34 text-center cursor-pointer'>Min. Interchange</h1>
                    </div>
                </div>

                <div className='Buttons w-full flex justify-center items-center space-x-2 mt-4'>

                    <div className="Route border border-white/30 rounded-2xl text-center w-auto px-3 bg-blue-500 active:bg-blue-600 cursor-pointer">
                        <p>Route</p>
                    </div>

                    <div className="Route border border-white/30 rounded-2xl text-center w-auto px-3 bg-blue-500 active:bg-blue-600 cursor-pointer">
                        <p>Return</p>
                    </div>

                    <div className="Route border border-white/30 rounded-2xl text-center w-auto px-3 pr-0.5 bg-blue-500 active:bg-blue-600 flex items-center cursor-pointer">
                        <p>Share</p>
                        <img src="icons/share.png" className='h-6 p-1' />
                    </div>



                </div>

                <Route />

            </div>
        </div >
    )
}

export default Details
