import React, { useState } from 'react'
import { registerUser } from "../services/authServices.js"
import { useNavigate } from "react-router-dom"

const RegisterPage = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const Navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        if (!name || !email || !password) {
            return setError("Please fill all the fields")
        }

        if (!email.includes("@")) {
            return setError("Invalid email")
        }

        if (password.length < 6) {
            return setError("Password must be at least 6 characters")
        }

        try {
            setLoading(true)
            if (error) setError("")
            if (success) setSuccess("")

            await registerUser(
                email.trim().toLowerCase(),
                password.trim(),
                name.trim()
            )

            setSuccess("User registered successfully!")

            setName("")
            setEmail("")
            setPassword("")
            Navigate("/dashboard")
        } catch (err) {
            console.error(err)
            setError(err?.message || "An unexpected error occurred.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-[400px] mx-auto mt-10'>

                <input
                    type="text"
                    placeholder='Enter Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder='Enter email'
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder='Enter password'
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type='submit' disabled={loading}>
                    {loading ? "Registering..." : "Register"}
                </button>
            </form>

            {success && <p className='text-green-500 text-center'>{success}</p>}
            {error && <p className='text-red-500 text-center'>{error}</p>}
        </div>
    )
}

export default RegisterPage