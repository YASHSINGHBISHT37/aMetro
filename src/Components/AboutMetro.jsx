import React from 'react'
import metroColors from '../../public/Data/metroColors.json'
import metroData from '../../public/Data/metroData.json'

const AboutMetro = () => {
    return (
        <div className='w-full h-auto relative my-10'>


            <h1 className='text-2xl opacity-70 mb-2'>About Metro Lines</h1>
            <div className='grid grid-cols-2 px-3 gap-3'>
                {metroData.map((line) => (

                    <div className='border border-white/20 rounded-[1.2vh] p-3 flex flex-col justify-center items-center space-y-3 cursor-pointer h-32 active:bg-white/2'>
                        <img src="icons/metro.png" className='h-10' />
                        <h1 style={{ color: line.lineColor }} className='font- leading-4 text-center'>
                            {line.lineNo && line.lineNo !== 'N/A' ? `Line ${line.lineNo}` : ''} <br />
                            {line.line}
                        </h1>
                    </div>
                ))}
            </div>

        </div>

    )
}

export default AboutMetro
