import { API_URL } from "./utils";

export async function loginUser(email: string, password: string) {
    const response = await fetch(`${API_URL}/user/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",

        },
        body: JSON.stringify({email, password})
    })
    const json = await response.json()
    return json
}

export async function getUser() {
    const response = await fetch(`${API_URL}/user`)
}