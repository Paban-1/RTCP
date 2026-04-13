import React from 'react'
import { LogIn, LogOut } from 'lucide-react'
import { useAuth } from '../utils/AuthContext'

const Header = () => {
    const { user, handleUserLogout } = useAuth()
    // console.log(user);

    return (
        <div id='header--wrapper'>
            {user ? (
                <>
                    Walcome {user.name}
                    <LogOut className='header--link' onClick={handleUserLogout} />
                </>
            ) : (
                <>
                    <button>
                        <LogIn />
                    </button>
                </>
            )}
        </div>
    )
}

export default Header
