import { DetailedUser, User } from "@/common/models";
import Avatar from "./avatar";
import Link from "next/link";

type Props = {
    user: User
}

const getUserDetails = async (username: User["login"]): Promise<DetailedUser> => {
    const response = await fetch(`https://api.github.com/users/${username}`, {
        cache: 'force-cache',
        headers: {
          'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      })
    if (!response.ok) throw new Error(`Failed to fetch details for user: ${username}`)

    return response.json()
}

export default async function UserCard({ user }: Props) {
    return <div style={{ display: "flex", flexDirection: "row", borderWidth: 1, borderRadius: 5, borderColor: "black", borderStyle: "solid", margin: 10, height: 100, width: 200, alignItems: "center" }}>
        <UserCardBody username={user.login} />
    </div>
}

async function UserCardBody({ username }: { username: User["login"] }) {
    try {
        const details = await getUserDetails(username)
        return <Link href={`/${details.login}`} style={{ padding: 10 }}>
            <div style={{ display: "flex", flexDirection: "row", padding: 10, alignItems: "center" }}>
                <Avatar src={details.avatar_url} />
                <div style={{ display: "flex", flexDirection: "column", paddingLeft: 5 }}>
                    <p>{details.login}</p>
                    <p>{details.name}</p>
                </div>
            </div>
        </Link>
    } catch (error: any) {
        return <div style={{ padding: 5 }}><h3 style={{ color: "red" }}>{error?.message}</h3></div>
    }
}