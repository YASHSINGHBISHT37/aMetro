import React, { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import metroData from '../../public/Data/metroData.json'

const Input = () => {
    const [from, setFrom] = useState('')
    const [focusFrom, setFocusFrom] = useState(false)

    const [to, setTo] = useState('')
    const [focusTo, setFocusTo] = useState(false)

    const fromInputRef = useRef(null)
    const toInputRef = useRef(null)

    const clearInput = (type, e) => {
        e.stopPropagation()
        if (type === 'from') {
            setFrom('')
            fromInputRef.current.focus()
        } else if (type === 'to') {
            setTo('')
            toInputRef.current.focus()
        }
    }

    const inputBoxClick = (type) => {
        if (type === 'from') {
            setFocusFrom(true)
            fromInputRef.current.focus()
        } else {
            setFocusTo(true)
            toInputRef.current.focus()
        }
    }

    return (
        <AnimatePresence>
            <div className='w-full h-auto p-4 bg-[#161616]'>

                <div className='px-6 space-y-2 relative'>
                    <div className="Bar absolute left-10.5 top-8.5 h-7 bg-white/70 w-[0.15vh] z-9999"></div>

                    <div className='Enter-Station relative'>
                        <motion.div
                            animate={{
                                borderWidth: focusFrom ? 1 : 0,
                                backgroundColor: focusFrom ? '#161616' : 'rgba(156, 163, 175, 0.14)'
                            }}
                            onClick={() => inputBoxClick('from')}
                            className='relative bg-transparent rounded-[1vh] h-11 flex items-center pl-3 pr-0 cursor-pointer'>

                            <div className='relative w-3 h-3 mr-3'>
                                <div className='relative w-3 h-3 bg-white rounded-full'></div>
                                <div className='absolute top-0 w-1/2 translate-1/2 h-1/2 bg-[#161616] rounded-full'></div>
                            </div>
                            <input ref={fromInputRef} value={from} required type="text" className='From outline-0 w-full'
                                onChange={(e) => setFrom(e.target.value)}
                                onBlur={() => setFocusFrom(false)}
                                onFocus={() => setFocusFrom(true)} />

                            {from && (
                                <div className='w-10  h-full overflow-hidden flex justify-center items-center'>
                                    <motion.img
                                        initial={{ x: 25, rotate: '90deg' }}
                                        animate={{ x: 0, rotate: '0deg' }}
                                        exit={{ x: 25, rotate: '90deg' }}
                                        src="icons/close.png"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setFrom('');
                                            fromInputRef.current.focus()
                                        }}
                                        className='w-5 h-5 cursor-pointer ' />
                                </div>
                            )}

                            <motion.h1
                                animate={{
                                    y: focusFrom || from ? -21 : 0,
                                    scale: focusFrom || from ? 0.8 : 1,
                                    backgroundColor: focusFrom || from ? '#161616' : 'rgba(0,0,0,0.0)',
                                }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                className='absolute text-white top-[1.2vh] left-8 px-1'>Enter Station
                            </motion.h1>

                        </motion.div>
                        {/* <div className="fromSuggestion absolute top-12.5 w-full h-50 bg-[#161616] border border-white/30 rounded-2xl z-99999 overflow-y-scroll">
                                {metroData.map((line,i) => (
                                    <div key={i} className={`flex flex-col w-full ${i === metroData.length - 1 ? '' : 'border-b border-white/30'}`}>

                                        {line.stations.slice().sort((a, b) => a.name.localeCompare(b.name)).map((station, j,arr) => (
                                            <div key={j} className={`flex justify-between items-center px-3 active:bg-gray-400/14 cursor-pointer  ${j === arr.length - 1 ? '' : 'border-b border-white/30'}`}>
                                                <div className='flex items-center gap-3'>
                                                    <div className="w-2.5 h-2.5 rounded-2xl" style={{ backgroundColor: line.lineColor }}></div>
                                                    <h1>{station.name}</h1>
                                                </div>
                                            </div>
                                        ))}


                                    </div>
                                ))}
                            </div> */}
                    </div>

                    <motion.div
                        animate={{
                            borderWidth: focusTo ? 1 : 0,
                            backgroundColor: focusTo ? '#161616' : 'rgba(156, 163, 175, 0.14)'
                        }}
                        onClick={() => inputBoxClick('to')}
                        className='relative bg-transparent rounded-[1vh] h-11 flex items-center pl-3 pr-0 cursor-pointer'>

                        <div className='relative w-3 h-3 mr-3'>
                            <div className='relative w-3 h-3 bg-white'></div>
                            <div className='absolute top-0 w-1/2 translate-1/2 h-1/2 bg-[#161616]'></div>
                        </div>
                        <input ref={toInputRef} value={to} required type="text" className='From outline-0 w-full'
                            onChange={(e) => setTo(e.target.value)}
                            onBlur={() => setFocusTo(false)}
                            onFocus={() => setFocusTo(true)} />

                        {to && (
                            <div className='w-10  h-full overflow-hidden flex justify-center items-center'>
                                <motion.img
                                    initial={{ x: 25, rotate: '90deg' }}
                                    animate={{ x: 0, rotate: '0deg' }}
                                    exit={{ x: 25, rotate: '90deg' }}
                                    src="icons/close.png"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setTo('');
                                        toInputRef.current.focus()
                                    }}
                                    className='w-5 h-5 cursor-pointer ' />
                            </div>
                        )}

                        <motion.h1
                            animate={{
                                y: focusTo || to ? -21 : 0,
                                scale: focusTo || to ? 0.8 : 1,
                                backgroundColor: focusTo || to ? '#161616' : 'rgba(0,0,0,0.0)',
                            }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            className='absolute text-white top-[1.2vh] left-8 px-1'>Enter Destination</motion.h1>
                    </motion.div>

                </div>

                <div className='px-6 mt-3'>
                    <div className="Route border text-[2.2vh] border-white/30 rounded-[2vh] text-center w-auto px-3 font-bold py-1.5 bg-blue-500 active:bg-blue-600 cursor-pointer">
                        <p>Route</p>
                    </div>
                </div>

            </div>
        </AnimatePresence >
    )
}

export default Input
