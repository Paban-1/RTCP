import { account, databases } from "../Main/appwrite";
import { ID } from "appwrite";

// Registers a new user with the provided email and password
async function registerUser(email, password, name) {
    try {
        // Creating a new user with a unique ID, email, password, and name
        let CreatedUser = await account.create(ID.unique(), email, password, name)
        await loginUser(email, password)
        return CreatedUser
    } catch (error) {
        // Log the error for debugging purposes
        console.error("RegisterUser error:", error)
        // Throw a new error with a user-friendly message
        throw new Error(error?.message || "Registration failed")
    }
}

// Login function to authenticate a user with email and password
async function loginUser(email, password) {
    try {
        // Creating a new session for the user with the provided email and password
        let session = await account.createEmailPasswordSession(email, password)
        return session
    } catch (error) {
        // Log the error for debugging purposes
        console.error("LoginUser error:", error)
        // Throw a new error with a user-friendly message
        throw new Error(error?.message || "Login failed")
    }
}

async function logoutUser() {
    try {
        // Deleting the current session to log the user out
        await account.deleteSession("current")
        return true
    } catch (error) {
        // Log the error for debugging purposes
        console.error("logoutUser error:", error)
        throw new Error("Logout failed")
    }
}

// Gets the current authenticated user / auto-login on app start
async function getCurrentUser() {
    try {
        // Retrieving the current authenticated user's information
        await account.get()
    } catch (error) {
        return null
    }
}

export { registerUser, loginUser, getCurrentUser, logoutUser }