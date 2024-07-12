import Avatar from "@/components/avatar"
import InfoLabel from "@/components/infoLabel"
import { Metadata } from "next"
import { DetailedUser, User } from "@/common/models";

export const generateMetadata = ({ params }: Props): Metadata => {
    return {
        title: `User page: ${params.username}`
    }
}

const getUserDetails = async (username: User["login"]): Promise<DetailedUser> => {
    const response = await fetch(`https://api.github.com/users/${username}`, { cache: 'force-cache' })
    if (!response.ok) throw new Error(`failed to fetch details for user: ${username}`)

    return response.json()
}

type Props = {
    params: {
        username: string
    }
}

export default async function Page({ params }: Props) {
    const details = await getUserDetails(params.username)
    return <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", margin: 20 }}>
        <div style={{ borderWidth: 1, borderRadius: 5, borderColor: "black", borderStyle: "solid", padding: 20 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

                <Avatar size={100} src={details.avatar_url} />
                <h2 style={{ paddingTop: "5px" }}>{details.login}</h2>
                <p>{details.name}</p>
            </div>

            <div style={{ margin: 10 }}>
                <InfoLabel tag="Company" value={details.company} />
                <InfoLabel tag="Social" value={details.twitter_username} />
                <InfoLabel tag="Followers" value={details.followers} />
                <InfoLabel tag="Following" value={details.following} />
                <InfoLabel tag="Public repos" value={details.public_repos} />
            </div>
        </div>
    </div>
}
