import { DetailedUser, User } from "@/common/models";
import Avatar from "../avatar/avatar";
import Link from "next/link";
import styles from "./card.module.css"

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
    return <div className={styles.container}>
        <UserCardBody username={user.login} />
    </div>
}

async function UserCardBody({ username }: { username: User["login"] }) {
    try {
        const details = await getUserDetails(username)
        return <Link href={`/${details.login}`}>
            <div className={styles.bodyWrapper}>
                <Avatar src={details.avatar_url} />
                <div className={styles.nameWrapper}>
                    <p className={styles.username}>{details.login}</p>
                    <p className={styles.fullname}>{details.name}</p>
                </div>
            </div>
        </Link>
    } catch (error: any) {
        return <div style={{ padding: 5 }}><h3 style={{ color: "red" }}>{error?.message}</h3></div>
    }
}