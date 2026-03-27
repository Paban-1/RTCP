import { account, databases } from "../Main/appwrite";

// Registers a new user with the provided email and password
async function registerUser(email, password, name) {
    try {
        // Creating a new user with a unique ID, email, password, and name
        let CreatedUser = await account.create("unique()", email, password, name)
        if (!CreatedUser) {
            throw new Error("Failed to create user");
        }
        return CreatedUser
    } catch (error) {
        // Log the error for debugging purposes
        console.error("RegisterUser error:", error)
        // Throw a new error with a user-friendly message
        throw new Error(error.message || "An unexpected error occurred during registration");
    }
}