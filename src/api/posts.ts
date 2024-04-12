import { API_URL } from "./utils";



export async function getPosts() {
    try {
    const response = await fetch(`${API_URL}/post`)
    const json = await response.json()
    return json.rows
    }
    catch (e) {
        return [{title: "lalala", text: "Дорогие ученики! Сегодня мы будем сас и сос"}, {title: "lalala", text: "Кто?"}]
    }
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
