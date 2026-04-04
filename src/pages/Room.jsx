import React, { useState, useEffect } from 'react'
import client, { databases } from '../config/appwriteConfig.js'
import config from '../crediantials/config.js'
import { ID, Query } from 'appwrite'
import { Trash2 } from "react-feather"


const Room = () => {

    const [messages, setMessages] = useState([])
    const [meaasgeBody, setMessageBody] = useState("")

    useEffect(() => {
        getMessages()

        const unsubscribe = client.subscribe(`databases.${config.APPWRITE_DATABASE_ID}.collections.${config.APPWRITE_COLLECTION_ID}.documents`, response => {

            if (response.events.includes("databases.*.collections.*.documents.*.create")) {
                console.log("A Message was Created");
                setMessages(prevState => [response.payload, ...prevState])
            }

            if (response.events.includes("databases.*.collections.*.documents.*.delete")) {
                console.log("A Message was Deleted");
                setMessages(prevState => prevState.filter(message => message.$id !== response.payload.$id))
            }
        })


        return () => {
            unsubscribe()
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        let payload = {
            body: meaasgeBody
        }

        let response = await databases.createDocument(
            config.APPWRITE_DATABASE_ID,
            config.APPWRITE_COLLECTION_ID,
            ID.unique(),
            payload
        )

        console.log("creted ", response);

        // setMessages(prevState => [response, ...prevState])
        setMessageBody("")
    }

    const getMessages = async () => {
        const response = await databases.listDocuments(config.APPWRITE_DATABASE_ID, config.APPWRITE_COLLECTION_ID,
            [
                Query.orderDesc("$createdAt"),
                Query.limit(10)
            ]
        )

        console.log("Response", response);
        setMessages(response.documents)
    }

    const deleteMessage = async (messageId) => {
        databases.deleteDocument(config.APPWRITE_DATABASE_ID, config.APPWRITE_COLLECTION_ID, messageId)
        setMessages(prevState => messages.filter(message => message.$id !== messageId))
    }

    return (
        <main className='container'>
            <div className='room--container'>

                <form id='message--form' onSubmit={handleSubmit}>
                    <div>
                        <textarea
                            required
                            maxLength="1000"
                            placeholder='Say something..' onChange={(e) => setMessageBody(e.target.value)}
                            value={meaasgeBody}></textarea>
                    </div>

                    <div className='send-btn--wrapper'>
                        <input className='btn btn--secondary' type="submit" value="Send" />
                    </div>
                </form>

                <div >
                    {messages.map((message) => (
                        <div key={message.$id} className='message--wrapper'>
                            <div className='message--header'>
                                <small className='message-timestamp'>{new Date(message.$createdAt).toLocaleString()}</small>

                                <Trash2
                                    className='delete--btn'
                                    onClick={() => { deleteMessage(message.$id) }} />
                            </div>

                            <div className='message--body'>
                                <span>{message.body}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Room
