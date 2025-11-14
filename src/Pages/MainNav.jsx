import React from 'react'

const MainNav = () => {
    const btns = [
        { label: 'Home', img: 'home.png', imgBold: 'homeBold.png' },
        { label: 'Map', img: 'map.png', imgBold: 'mapBold.png' },
        { label: 'Route', img: 'route.png', imgBold: 'routeBold.png' },
        { label: 'Info', img: 'info.png', imgBold: 'menuBold.png' },
        { label: 'Menu', img: 'menu.png', imgBold: 'menuBold.png' },
    ]
    return (
        <div className='bg-blue-00 w-full z-9999 h-14 fixed bottom-0 left-0'>

            <div className='flex justify-between items-center backdrop-blur-[0vh] bg-gradient-to-b from-transparent via-[#161616]/80 to-[#161616] bg-[#161616] py-2 px-7'>
                {btns.map((btn, i) => (
                    <div key={i} className='flex flex-col items-center space-y-0.5 cursor-pointer'>
                        <img src={`icons/${btn.img}`} className='w-5.5 h-5.5' />
                        <h1 className='text-[1.7vh]'>{btn.label}</h1>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default MainNav
