import { createContext, useState, useEffect, useContext } from 'react'
import { account } from '../config/appwriteConfig'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()




export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        getUserOnLoad()
    }, [])

    const getUserOnLoad = async () => {
        try {
            const accountDetails = await account.get()
            setUser(accountDetails)
        } catch (error) {
            console.error("Error fetching user on load:", error);
        }
        setLoading(false)
    }

    const handleUserLogin = async (e, credentials) => {
        e.preventDefault()
        try {
            const response = await account.createEmailPasswordSession(
                credentials.email,
                credentials.password
            )
            console.log("Login Response:", response);
            const accountDetails = await account.get()
            setUser(accountDetails)

            navigate('/')

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