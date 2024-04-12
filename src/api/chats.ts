import { API_URL } from "./utils";

export async function getChats() {
    const response = await fetch(`${API_URL}/chat/1`)
    const json = await response.json()
    return json
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