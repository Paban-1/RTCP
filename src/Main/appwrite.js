// appwrite.js Imports the necessary modules from the Appwrite SDK and initializes the client with the endpoint and project ID from the configuration file. It then exports the account and databases instances for use in other parts of the application.
import { Client, Databases, Account } from "appwrite";
import config from "../crediantials/config"

// Initializing the Appwrite client with the endpoint and project ID from the configuration
const client = new Client()
    .setEndpoint(config.APPWRITE_ENDPOINT)
    .setProject(config.APPWRITE_PROJECT_ID)

// Exporting the client instance for use in other parts of the application
const account = new Account(client);
const databases = new Databases(client)

// Exporting the account and databases instances for use in other parts of the application
export { account, databases }