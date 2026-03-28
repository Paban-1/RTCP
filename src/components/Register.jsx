import React, { useState } from 'react'
import { registerUser } from "../services/authServices.js"

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        registerUser(email, password, name)
            .then((response) => {
                console.log("User registered successfully:", response)
                // You can add additional logic here, such as redirecting the user or showing a success message
            })
            .catch((error) => {
                console.error("Error registering user:", error)
                // You can add error handling logic here, such as displaying an error message to the user
            })
    }

    return (
        <div>
            <form action="" className='flex flex-col gap-5 w-[400px] mx-auto mt-10'>
                <input type="text" placeholder='Enter Name' />
                <input type="text" placeholder='Enter email' />
                <input type="text" placeholder='Enter password' />
                <button type='submit' onClick={handleSubmit}>Register</button>
            </form>
        </div>
    )
}

export default Register
