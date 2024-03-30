import { API_URL } from "./utils";

export async function getPosts() {
    const response = await fetch(`${API_URL}/post`)
    const json = await response.json()
    return json
}

export async function createPost(title: string, text: string) {
    const response = await fetch(`${API_URL}/post`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({userId: "1", title, text})
    })
    const json = await response.json()
    return json
}