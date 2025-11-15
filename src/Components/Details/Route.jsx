import React from 'react'
import metroData from '../../../Frontend/public/Data/metroData.json'
import metroColors from '../../../Frontend/public/Data/metroColors.json'

const Route = () => {

    return (
        <div className="relative mt-">
            {metroData.map((line) => (
                <div key={line.line} className='space-y-5 pt-4 pb-2'>


                    <div className='flex justify-around gap-0-2'>
                        {line.details.map((detail, i) => (
                            <div key={i} className='-space-y-1 flex flex-col items-center w-20'>
                                <h1 className='font-bold text-[2.2vh]'>{detail.data}</h1>
                                <p className='opacity-70 text-[1.6vh]'>{detail.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Metro Staions */}
                    <div className="relative rounded-2xl border border-white/0 bg-white/0 flex justify-between items-start">
                        <div>
                            {line.stations.map((station, j) => (
                                <div key={j} className={`Stations-List flex justify-between items-center px-2 ${j === 0 ? 'pt-0.5' : ''} ${j === line.stations.length - 1 ? 'border-b-0 pb-0.5' : 'border-b border-white/0 '}`}>

                                    <div className='flex items-center gap-1'>
                                        <div className='w-4 h-4 rounded-full relative '>
                                            <div className={`Line w-[1vh] h-[1vh] absolute z-9999 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#161616] ${j === 0 ? 'bg-transparent' : ''} ${j === line.stations.length - 1 ? 'bg-transparent' : ''}`}></div>
                                            <div style={{ backgroundColor: line.lineColor }} className={`Line w-[0.2vh] absolute top-1/2 left-1/2 -translate-x-1/2 ${j === line.stations.length - 1 ? '' : 'h-6'}`}></div>
                                            <div style={{ backgroundColor: line.lineColor || '#FFFFFF' }} className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1.5vh] h-[1.5vh] rounded-full`}></div>
                                        </div>
                                        <p className='text-white'>{station.name}</p>
                                    </div>

                                </div>
                            ))}
                        </div>

                        <div className='p-1.5 borde border-white/10 bg-white/0 rounded-[1vh] w-19 top-0 right-0 text-right'>
                            <h1 className='text-white/60 text-[1.4vh]'>Towards</h1>
                            <h1 className='text-blue-500 text-[1.6vh] leading-3.5'> {line.platforms.from}</h1>
                        </div>
                    </div>

                    {/* Change Metro */}
                    <div className='flex justify-between items-center rounded-[1.2vh] p-2 border bg-white/2 border-white/10'>
                        <div className='flex items-center gap-1 opacity-70'>
                            <img src="icons/lineChange.png" className='h-5' />
                            <h1 className='text-[1.6vh]'>Change Metro</h1>
                        </div>

                        <div className='text-[1.6vh]'>
                            <span className='text-center opacity-70'>Move Towards </span>
                            <span className='font-bold'>{line.line}</span>
                        </div>
                    </div>

                </div>
            ))}
        </div >
    )
}

export default Route
