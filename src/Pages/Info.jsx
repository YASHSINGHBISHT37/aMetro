import React from 'react'
import metroData from '../../public/Data/metroData.json'
import metroColors from '../../public/Data/metroColors.json'
import { AnimatePresence, motion } from 'framer-motion'

const Info = () => {

    return (
        <div className='w-full min-h-screen max-h-auto bg-[#161616] backdrop-blur-[2vh] relative pt-14 px-2 space-y-10 pb-30'>
            {metroData.map((line) => (
                <div key={line.line} className='space-y-5 borde pt-4 pb-2 px-2 rounded-3xl border-white/20'>

                    <div className='flex items-center gap-3 pl-2'>
                        <img src="icons/metro.png" className='opacity- h-8'/>
                        <h1 className='font-bold text-3xl'>
                            {line.lineNo && line.lineNo !== 'N/A' ? `Line ${line.lineNo} - ` : ''}
                            {line.line}
                        </h1>
                    </div>

                    <div className='flex items-center justify-around w-full font-bold leading-5 border rounded-2xl border-white/10 min-h-14 p-1 bg-white/2'>
                        <span className='text-left w-[45%] break-word pr-3'>{line.platforms.from}</span>
                        <img src="icons/arrow.png" className='absolute h-7 mx-2 ml-3 rotate-90 border rounded-full border-white/30 p-1 bg-blue-500' />
                        <h1 className='text-right w-[45%] break-word pl-4'>{line.platforms.to}</h1>
                    </div>



                    <div className='flex justify-around gap-0-2'>
                        {line.details.map((detail, i) => (
                            <div key={i} className='-space-y-1 flex flex-col items-center w-20'>
                                <h1 className='font-bold text-[2.2vh]'>{detail.data}</h1>
                                <p className='opacity-70 text-[1.6vh]'>{detail.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="relative rounded-2xl border border-white/10 bg-white/1">
                        {line.stations.map((station, j) => (

                            <div key={j} className={`Stations-List flex justify-between items-center px-2 ${j === 0 ? 'pt-0.5' : ''} ${j === line.stations.length - 1 ? 'border-b-0 pb-0.5' : 'border-b border-white/10 '}`}>
                                <div className='flex items-center gap-1'>
                                    <div className='w-4 h-4 rounded-full relative '>
                                        <div className={`Line w-[1vh] h-[1vh] absolute z-9999 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#161616] ${j === 0 ? 'bg-transparent' : ''} ${j === line.stations.length - 1 ? 'bg-transparent' : ''}`}></div>
                                        <div style={{ backgroundColor: line.lineColor }} className={`Line w-[0.2vh] absolute top-1/2 left-1/2 -translate-x-1/2 ${j === line.stations.length - 1 ? '' : 'h-6'}`}></div>
                                        <div style={{ backgroundColor: line.lineColor || '#FFFFFF' }} className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1.5vh] h-[1.5vh] rounded-full`}></div>
                                    </div>
                                    <p className='text-white'>{station.name}</p>
                                </div>

                                {station.connect && (
                                    <div className='Connection flex gap-2'>
                                        <div className='flex items-center gap-1'>
                                            <img src="icons/lineChange.png" className='h-3 opacity-30' />
                                            {station.connect.map((connect) => {
                                                const colorData = metroColors.find(c => c.line === connect.line)
                                                const color = colorData ? colorData.color : '#FFFFFF'

                                                return (
                                                    <p style={{ color: color }} className='text-[1.4vh]'>{connect.line}</p>

                                                )
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>

                        ))}

                    </div>

                </div>
            ))}
        </div>
    )
}

export default Info
