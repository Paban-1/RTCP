import React, { useState } from 'react'

const RegisterPage = () => {

    const [credentials, setCredentials] = useState({
        email: "",
        password1: "",
        password2: ""
    })
    return (
        <div>
            Register
        </div>
    )
}

export default RegisterPage
