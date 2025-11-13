import React from 'react'

const Route = () => {
    const metroLines = [
        // 🟡 Yellow Line
        { name: "Samaypur Badli", time: "13:10", color: "#FFD700", lineColorName: "Yellow Line" },
        { name: "Kashmere Gate", time: "13:25", color: "#FFD700", lineColorName: "Yellow Line" },
        { name: "Rajiv Chowk", time: "13:30", color: "#FFD700", lineColorName: "Yellow Line" },

        // 🟣 Violet Line
        { name: "Mandi House", time: "13:35", color: "#8A2BE2", lineColorName: "Violet Line" },
        { name: "Central Secretariat", time: "13:40", color: "#8A2BE2", lineColorName: "Violet Line" },
        
        { name: "Khan Market", time: "13:45", color: "#8A2BE2", lineColorName: "Violet Line" },

        // 🔵 Blue Line
        { name: "Indraprastha", time: "13:50", color: "#0074D9", lineColorName: "Blue Line" },
        { name: "Yamuna Bank", time: "13:55", color: "#0074D9", lineColorName: "Blue Line" },
        { name: "Akshardham", time: "14:00", color: "#0074D9", lineColorName: "Blue Line" },
    ]

    return (
        <div className="relative mt-5 pt-6">
            <div className="Bar w-92 h-[0.1vh] bg-white/20 absolute top-0 left-1/2 -translate-x-1/2"></div>
            {metroLines.map((station, i) => {

                const nextStation = metroLines[i + 1]
                const isLast = i === metroLines.length - 1
                const isInterchange = nextStation && nextStation.lineColorName !== station.lineColorName

                return (
                    <div key={i}>

                        <div className='flex justify-between'>
                            <div className='flex items-center gap-4 ml-10 mb-1 relative'>
                                <div style={{ backgroundColor: station.color }} className='w-4 h-4 rounded-full relative'>
                                    <div style={{ backgroundColor: station.color }} className={`Line w-[0.2vh] absolute top-1/2 left-1/2 -translate-x-1/2 ${nextStation ? 'h-6' : ''}`}></div>
                                    <div className={`bg-[#161616] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1.5vh] h-[1.5vh] rounded-full ${i === 0 ? 'bg-transparent' : ''} ${i === metroLines.length - 1 ? 'bg-transparent' : ''}`}></div>
                                </div>
                                <p>{station.name}</p>
                            </div>

                            {/* <div className='text-right pt-'>
                                <span style={{ color: station.color, backgroundColor: `${station.color}20`, }} className='w-auto border border-white/30 rounded-2xl mb-1 bg-gray-400/14 font-bold px-2 text-[1.4vh]'>{station.lineColorName}</span>
                                <p className='opacity-60 text-[1.4vh] leading-3 w-30'>Towards Kashmere Gate Platform 2</p>
                            </div> */}
                        </div>


                        {isInterchange && (
                            < div className='my-3' >
                                <span className='border border-white/20 text-[1.6vh] bg-gray-00/20 px-3 py-1 rounded-2xl ml-18 '>Interchange Change to {nextStation.lineColorName}</span>
                            </div>
                        )}
                    </div>
                )
            })}
        </div >
    )
}

export default Route
