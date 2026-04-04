import { Client, Databases } from "appwrite";
import config from "../crediantials/config"

const client = new Client()
    .setEndpoint(config.APPWRITE_ENDPOINT) // Your Appwrite Endpoint
    .setProject(config.APPWRITE_PROJECT_ID)

export const databases = new Databases(client)


export default client