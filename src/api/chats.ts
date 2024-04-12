import { API_URL } from "./utils";

export async function getChats() {
    try {
    const response = await fetch(`${API_URL}/chat/1`)
    const json = await response.json()
    return json
    }
    catch (e) {
        return [{name: "Евгений Дорохов", id: 1967}]
    }
}


export async function getMessages(id?:string) {
    try {
    const response = await fetch(`${API_URL}/message/message_chat?chatId=${id}`)
    const json = await response.json()
    return json.rows
    }
    catch (e) {
        return [{message: "HeLlO", userId: 1}, {message: "free stickers", userId: 2}, {message: "a", userId: 1}, {message: "ba", userId: 1}, {message: "aae", userId: 1}, {message: "ыыыы", userId: 1}, {message: "ыыыы", userId: 1}, {message: "HeLlO", userId: 1}, {message: "free stickers", userId: 2}, {message: "a", userId: 1}, {message: "ba", userId: 1}, {message: "aae", userId: 1}, {message: "ыыыы", userId: 1}, {message: "ыыыы", userId: 1}]
    }
}



export async function createChat(name: string) {
    const response = await fetch(`${API_URL}/chat/create`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ownerId: "1", name})
    })
    const json = await response.json()
    return json
}

export async function sendMessage(message: string, chatId?: string, userId: string = "1") {
    const response = await fetch(`${API_URL}/message/message_chat`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({message, chatId, userId})
    })
    const json = await response.json()
    return json
}

export async function getChat(id?: string) {
    const response = await fetch(`${API_URL}/chat/name/${id}`)
    const json = await response.json()
    return json
}