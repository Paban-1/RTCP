import React from 'react'
import { LogIn, LogOut } from 'lucide-react'
import { useAuth } from '../utils/AuthContext'

const Header = () => {
    const { user } = useAuth()
    // console.log(user);
    
    return (
        <div id='header--wrapper'>
            {user ? (
                <>
                    Walcome {user.name}
                    {/* <LogOut className='header--link' /> log */}
                </>
            ) : (
                <>
                    <button>
                        <LogIn /> Login
                    </button>
                </>
            )}
        </div>
    )
}

export default Header
