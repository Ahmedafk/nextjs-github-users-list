import { DetailedUser, User } from "@/common/models";
import Avatar from "./avatar";
import Link from "next/link";

type Props = {
    user: User
}

const getUserDetails = async (user: User): Promise<DetailedUser> => {
    const response = await fetch(`https://api.github.com/users/${user.login}`, { cache: 'force-cache' })
    if (!response.ok) throw new Error(`Failed to fetch details for user: ${user.login}`)

    return response.json()
}

export default async function UserCard({ user }: Props) {
    try {
        const details = await getUserDetails(user)
        return <Link href={`/${details.login}`} style={{ margin: 10 }}>
                <div style={{ display: "flex", flexDirection: "row", borderWidth: 1, borderRadius: 5, borderColor: "black", borderStyle: "solid", padding: 10, height: 100, width: 200, alignItems: "center" }}>
                    <Avatar src={details.avatar_url} />
                    <div style={{ display: "flex", flexDirection: "column", paddingLeft: 5 }}>
                        <p>{details.login}</p>
                        <p>{details.name}</p>
                    </div>
                </div>
            </Link>
    } catch (error) {
        return <div>
  
        <h1>Oops! Something went wrong.</h1>
    
      </div>
    }
}

function FallbackErrorComponent ({ error }: { error: Error }) {

    return <div>
  
      <h1>Oops! Something went wrong.</h1>
  
      <p>{error.message}</p>
  
    </div>
  
}
