import { createContext, useContext, useEffect, useState } from "react"
import { registerUser, loginUser, logoutUser, getCurrentUser } from "../services/authServices"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // 🔄 Auto-login (runs on app start)
    useEffect(() => {
        async function loadUser() {
            try {
                const currentUser = await getCurrentUser()
                setUser(currentUser)
            } catch (error) {
                setUser(null)
            } finally {
                setLoading(false)
            }
        }

        loadUser()
    }, [])

    // 🔐 Register + auto login
    const register = async (name, email, password) => {
        try {
            await registerUser(email, password, name)

            const currentUser = await getCurrentUser()
            setUser(currentUser)

            return currentUser
        } catch (error) {
            throw error
        }
    }

    // 🔐 Login
    const login = async (email, password) => {
        try {
            await loginUser(email, password)

            const currentUser = await getCurrentUser()
            setUser(currentUser)

            return currentUser
        } catch (error) {
            throw error
        }
    }

    // 🚪 Logout
    const logout = async () => {
        try {
            await logoutUser()
            setUser(null)
        } catch (error) {
            console.error("Logout error:", error)
        }
    }

    return (
        <AuthContext.Provider value={{ user, loading, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

// 🔥 Custom hook (clean usage)
export const useAuth = () => useContext(AuthContext)