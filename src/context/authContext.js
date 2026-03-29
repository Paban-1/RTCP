// Import necessary modules from React
import { createContext, useState, useEffect, useContext } from "react";
import { loginUser, registerUser, getCurrentUser } from "../services/authServices"

// Create the AuthContext
const AuthContext = createContext()

// AuthProvider component to provide authentication state and functions to the rest of the application
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // Load User on app Start
    useEffect(() => {
        async function loadUser() {
            try {
                const res = await getCurrentUser()
                setUser(res)
            } catch (error) {
                setUser(null)
            } finally {
                setLoading(false)
            }
        }
        loadUser()
    }, [])


    // Login function to authenticate a user with email and password
    const login = async (data) => {
        try {
            const res = await loginUser(data)
            setUser(res)
        } catch (error) {
            throw error
        }
    }

    // Logout function to clear the user state
    const logout = async () => {
        await logoutUser()
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }} >
            {children}
        </AuthContext.Provider>
    )
}

// Coustom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext)

