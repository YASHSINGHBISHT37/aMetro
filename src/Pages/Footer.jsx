import React from 'react'

const Footer = () => {
    const footer = [
        { label: 'Home' },
        { label: 'Feedback' },
        { label: 'Disclaimer' },
        { label: 'helpline@dmrc.org' },
        { label: 'Privacy Policy' },

    ]
    return (
        <div className='relative w-full h-auto p-2'>

            <div className='bg-white/2  rounded-2xl p-4 border border-white/7'>
                <div className='flex items-center gap-2.5'>
                    <img src="imgs/Metro.png" className='h-12' />
                    <h1 className='leading-5 text-2xl font-bold tracking-wider'>Delhi <br /> Metro</h1>
                </div>

                <h1 className='mt-6 font-bold text-[2.2vh] opacity-60'>Quick Links</h1>
                <div className='pb-4'>
                    {footer.map((f,i) => (
                        <h1 key={i} className='cursor-pointer hover:text-blue-500 active:text-blue-500 leading-5.5'>{f.label}</h1>
                    ))}
                </div>

                <div className='border-t border-white/10 py-3'>
                    <p className='opacity-80 '>DMRC Helpline no.</p>
                    <p className='leading-3.5 text-blue-500'>155370<span className='text-[1.4vh] text-white/30'> (This call is chargeable as per calling party pay basis.)</span></p>
                    <p className='opacity-80 mt-2 0'>CISF Helpline no.</p>
                    <p className='leading-3.5 text-blue-500'>155655</p>
                </div>

                <div className='text mt-2 flex items-center justify-between opacity-70 text-[1.4vh] borde'>
                    <h1>© 2025 . All rights are reserved</h1>
                    <h1>Developed by Yash Singh Bisht</h1>
                </div>  
            </div>

        </div>
    )
}

export default Footer
