import { LogIn } from "lucide-react";
import { account, databases } from "../Main/appwrite";

// Registers a new user with the provided email and password
async function registerUser(email, password, name) {
    try {
        // Creating a new user with a unique ID, email, password, and name
        let CreatedUser = await account.create("unique()", email, password, name)
        console.log(email);

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

// Login function to authenticate a user with email and password
async function LoginUser(email, password) {
    console.log("Yep i'm login");
}

// Gets the current authenticated user
async function getCurrentUser() {
    console.log("Get Current User Methord");
}

export { registerUser, LoginUser, getCurrentUser }