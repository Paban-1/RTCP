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
        // console.log("USer From uSeEffect",user);
    }, [])

    const getUserOnLoad = async () => {
        try {
            const accountDetails = await account.get()
            setUser(accountDetails)
            // console.log("Fetched user:", accountDetails);
            // console.log("User :", user)
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
            // console.log("Login Response:", response);
            const accountDetails = await account.get()
            setUser(accountDetails)
            // console.log("Account Detiles", accountDetails);
            // console.log("This is the logged-in user:", user);
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }

    const handleUserLogout = async () => {
        await account.deleteSession('current')
        setUser(null)
    }

    const contextData = {
        user,
        handleUserLogin,
        handleUserLogout
    }

    return <AuthContext.Provider value={contextData}>
        {loading ? <h1>Loading....</h1> : children}
    </AuthContext.Provider>
}

export const useAuth = () => { return useContext(AuthContext) }

export default AuthContext