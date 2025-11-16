import React from 'react'
import metroData from '../../public/Data/metroData.json'
import metroColors from '../../public/Data/metroColors.json'

const Mock = () => {
    return (
        <div className='w-full h-auto px-4 absolute top-33 z-99999 bg-[#161616]'>


            <div className='border border-white/20 rounded-[2vh] h-90 p-4 space-y-7 flex flex-col justify-between relative'>
                <div className='space-y-2 text-[1.6vh]'>

                    <h1 className='text-2xl mb-5'>Plan Your Journey</h1>

                    <div>
                        <p className='text-[#A62529]'>From</p>
                        <input type="text" placeholder='Type station name or click to select' className='border w-full border-white/20 rounded-[0.8vh] p-2 px-3 outline-none' />
                    </div>

                    <div>
                        <p className='text-[#A62529]'>To</p>
                        <input type="text" placeholder='Type station name or click to select' className='border w-full border-white/20 rounded-[0.8vh] p-2 px-3 outline-none' />
                    </div>

                </div>

                <div className='Buttons flex justify-between'>
                    <div className='bg-blue-500 border border-white/10 rounded-[0.8vh] p-1 px-2 text-[1.6vh] active:scale-95 transition-all ease-in-out'>
                        <h1>Reset</h1>
                    </div>

                    <div className='bg-blue-500 border border-white/10 rounded-[0.8vh] p-1 px-2 text-[1.6vh] active:scale-95 transition-all ease-in-out'>
                        <h1>Show Route & Fare</h1>
                    </div>
                </div>

            </div>


            <div className='absolute w-full h-full top-0 left-0 px-4'>
                <div className='bg-[#161616] border border-white/20 rounded-[2vh] p-4 h-full w-full'>

                    <div className='flex justify-between items-center'>
                        <h1 className='font-bold text-[2vh]'>Select From</h1>
                        <img src="icons/close.png" className='h-6' />
                    </div>

                    <div className='mt-4 relative h-62'>
                        <input type="text" placeholder='Type station name or click to select' className='border w-full border-white/20 rounded-[1.4vh] p-2 px-3 outline-none' />

                        <div className='w-full h-full absolute left-0 top-10 borde overflow-scroll'>
                            {metroData.map((line, i) => (

                                <div
                                    key={i}
                                    className={`flex justify-between items-end active:bg-white/7 px-2 ${i === metroData.length-1 ? 'border-b-0 pt-2' : 'border-0 border-white/20 py-2'} ${i === 0 ? 'pb-2' : ''}`}>

                                    <div className='-space-y-1'>
                                        <h1 className='opacity-70 text-[1.6vh]'>Line {line.lineNo}</h1>

                                        <div className='flex justify-center items-center text-[1.4vh]'>
                                            <p>{line.platforms.from}</p>
                                            <img src="icons/arrow.png" className='h-2 rotate-90 mx-1' />
                                            <p>{line.platforms.to}</p>
                                        </div>

                                    </div>

                                    <div style={{ backgroundColor: line.lineColor }} className='px-1 rounded-[0.6vh] r'>
                                        <p className='text-[1.4vh] text-right'>{line.line}</p>
                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Mock
