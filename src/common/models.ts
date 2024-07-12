export type User = {
    id: number
    login: string
    avatar_url: string
    html_url: string
    followers_url: string
    following_url: string
}

export interface DetailedUser extends User {
    name: string
    company: string
    followers: number
    following: number
    public_repos: number
    twitter_username: string
}