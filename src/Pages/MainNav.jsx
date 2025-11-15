import { useState } from "react"

const MainNav = () => {
    const [navBtnClick, setNavBtnClick] = useState('Home')
    const navClick = (btn) => setNavBtnClick(btn)

    const btns = [
        { label: 'Home', img: 'home.png', imgBold: 'homeBold.png' },
        { label: 'Map', img: 'map.png', imgBold: 'mapBold.png' },
        { label: 'Route', img: 'route.png', imgBold: 'routeBold.png' },
        { label: 'Info', img: 'info.png', imgBold: 'menuBold.png' },
        { label: 'Menu', img: 'menu.png', imgBold: 'menuBold.png' },
    ]

    return (
        <div className='w-full z-9999 fixed bottom-0 left-0'>

            <div className='flex justify-around items-center backdrop-blur-[0vh] bg-[#161616] h-auto w-full py-1.5 pt-2.5'>
                {btns.map((btn, i) => (
                    <div onClick={() => navClick(btn.label)} key={i} className='flex flex-col items-center cursor-pointer gap-1.5'>
                        {navBtnClick === btn.label ? (<img src={`icons/${btn.imgBold}`} className='h-5' />) : (<img src={`icons/${btn.img}`} className='h-5' />)}

                        <h1 className='text-[1.5vh]'>{btn.label}</h1>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default MainNav
