import React from 'react'
import { MessageCircle } from "../constent"

const Navbar = () => {
    return (
        <nav className='h-screen w-[45px] bg-blue-500 flex items-start justify-center p-2'>
            <div className='bg-black rounded-full p-2 cursor-pointer'>
                <MessageCircle className='text-white' size={16}/>
            </div>
        </nav>
    )
}

export default Navbar
