import { div } from 'framer-motion/client'
import React, { useState } from 'react'
import Route from '../Components/Details/Route'
import metroData from '../../public/Data/metroData.json'

const Details = () => {
    const data = [
        { label: 'Fare', data: '₹43', img: 'fare.png' },
        { label: 'Stations', data: '14', img: 'stations.png' },
        { label: 'InterChange', data: '3', img: 'lineChange.png' },
        // { label: 'Time', data: '129 min', img: 'time.png' },
        // { label: 'Last', data: '11:02 Pm' },
        // { label: 'Phone', data: '8800793133' },
    ]


    const [highLight, setHightLight] = useState('time')

    return (
        <div className='relative w-full h-auto bg-[#161616] pb-30 px-2'>
            <div className='h-full overflow-scroll'>

                <div className='Station leading-5 font-bold tracking-wide text-[2vh] mb-8 bg-[#161616]flex items-center justify-center h-14'>
                    <div className='flex items-center justify-around w-full'>
                        <span className='text-left w-[45%] break-word pr-3'>Sir Vishweshwaraiah Moti Bagh</span>
                        <img src="icons/arrow.png" className=' absolute h-7 mx-2 ml-3 rotate-90 border rounded-full border-white/30 p-1 bg-blue-500' />
                        <h1 className='text-right w-[45%] break-word pl-4'>Hazrat  Nizzamuddin Railway Station</h1>
                    </div>
                </div>

                <div className='flex justify-center items-center my-4'>
                    <div className='relative flex justify-between items-center text-[1.7vh] border p-1.5 py-6 w-100 h-11 rounded-[1.2vh] border-white/10 overflow-auto'>
                        <div className={`highLight bg-blue-500 border border-white/20 rounded-[0.8vh] w-1/2 h-9 -translate-y-1/2 absolute top-1/2 left-1.5 transition-all duration-400 ease-in-out
                            ${highLight === 'lineChange' ? 'translate-x-46' : 'translate-x-0'}`}></div>
                        <h1 onClick={() => setHightLight('time')} className='relative w-1/2 text-center cursor-pointer'>Shortest Route</h1>
                        <h1 onClick={() => setHightLight('lineChange')} className='relative w-1/2 text-center cursor-pointer'>Min. Interchange</h1>
                    </div>
                </div>

                <div className='flex justify-between items-center px-2'>
                    <div>
                        <h1 className='text-[2vh]'>11:03 PM - 12:07 AM</h1>
                    </div>
                    <div>
                        <span className='text-[2.6vh]'>64</span>
                        <span className='opacity-70'> Mins</span>
                    </div>
                </div>

                <div className='Data flex flex-nowrap items-center justify-between gap-2 px-2 mb-4'>
                    {data.map((item, i) => (

                        <div key={i} className='flex items-center justify-center space-x-2 pr-3 py-1 text-[1.7vh] border border-white/10 rounded-[1.2vh] w-30 bg-gray-400/7'>
                            <img src={`icons/${item.img}`} className='p-2 w-10 h-10 opacity borde' />
                            <div className='leading-5.5'>
                                <h1 className='text-[1.9vh] font-bold '>{item.data}</h1>
                                <h1 className='text-[1.6vh] opacity-60'>{item.label}</h1>
                            </div>
                        </div>

                    ))}
                </div>

                <div className='border-y border-white/20 py-3 px-2 space-y-2'>
                    <p className='text-[1.2vh] opacity-70'><span className='text-red-500'>* </span>This is a single journey token fare. Use smart card to avail discounts.</p>
                    <div className='rounded-[0.8vh] border border-white/3 bg-white/2 p-2'>
                        <p className='text-[1.4vh] leading-4' >
                            *Time shown is estimated travel time only (subject to change due to any inevitable reasons). Passengers are advised to keep extra time to travel.
                        </p>
                    </div>
                </div>






                {/* <div className='px-10 flex justify-center items-center'>
                    <div className='relative flex justify-between items-center text-[1.7vh] border p-1.5 w-72 h-11 rounded-full border-white/20 overflow-auto'>
                        <div className={`highLight bg-blue-500 border border-white/20 rounded-full w-1/2 h-8 -translate-y-1/2 absolute top-1/2 left-1.5 transition-all duration-400 ease-in-out
                            ${highLight === 'lineChange' ? 'translate-x-33' : 'translate-x-0'}`}></div>
                        <h1 onClick={() => setHightLight('time')} className='relative w-34 text-center cursor-pointer'>Shortest Route</h1>
                        <h1 onClick={() => setHightLight('lineChange')} className='relative w-34 text-center cursor-pointer'>Min. Interchange</h1>
                    </div>
                </div>

                <div className='Buttons w-full flex justify-center items-center space-x-2 mt-4'>

                    <div className="Route border border-white/30 active:scale-95 transition-all ease-in-out rounded-[1.2vh] text-center w-auto px-3 bg-blue-500 active:bg-blue-600/ cursor-pointer">
                        <p>Route</p>
                    </div>

                    <div className="Route border border-white/30 active:scale-95 transition-all ease-in-out rounded-[1.2vh] text-center w-auto px-3 bg-blue-500 active:bg-blue-600 cursor-pointer">
                        <p>Return</p>
                    </div>

                    <div className="Route border border-white/30 active:scale-95 transition-all ease-in-out rounded-[1.2vh] text-center w-auto px-3 pr-2 gap-0.5 bg-blue-500 active:bg-blue-600 flex items-center cursor-pointer">
                        <p>Share</p>
                        <img src="icons/share.png" className='h-6 p-1' />
                    </div>
                </div> */}

                <Route />

            </div>
        </div >
    )
}

export default Details
