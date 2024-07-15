import { USERS_ENDPOINT } from "@/common/constants";
import { DetailedUser, User } from "@/common/models";

export const getUsersPaginated = async (lastId: number = 0, per_page: number = 100): Promise<User[]> => {
    const response = await fetch(`${USERS_ENDPOINT}?per_page=${per_page}&since=${lastId}`, {
        cache: 'force-cache',
        headers: {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
            'Accept': 'application/vnd.github.v3+json'
        }
    })
    if (!response.ok) {
        const errorMessage = await response.text()
        console.error(`Failed to fetch users`, errorMessage)
        throw new Error("Failed to fetch users, please try again later!")
    }

    return response.json()
}

export const getUserDetails = async (username: User["login"]): Promise<DetailedUser> => {
    const response = await fetch(`${USERS_ENDPOINT}/${username}`, {
        cache: 'force-cache',
        headers: {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
            'Accept': 'application/vnd.github.v3+json'
        }
    })
    if (!response.ok) {
        const errorMessage = await response.text()
        console.error(`Failed to fetch details for user: ${username}`, errorMessage)
        throw new Error(`Failed to fetch details for user: ${username}, please try again later!`)
    }

    return response.json()
}