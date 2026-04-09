import { createContext, useState, useEffect, useContext } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    useEffect(() => {
        setLoading(false)
    }, [])

    const handleUserLogin = async (e, credentials) => {
        e.preventDefault()
        try {

        } catch (error) {
            console.log(error);
        }
    }
    const contextData = {
        user,
        handleUserLogin
    }

    return <AuthContext.Provider value={contextData}>
        {loading ? <h1>Loading....</h1> : children}
    </AuthContext.Provider>
}

export const useAuth = () => { return useContext(AuthContext) }

export default AuthContext