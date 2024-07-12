import InfoLabel from "@/components/infoLabel/infoLabel"
import { Metadata } from "next"
import { DetailedUser, User } from "@/common/models";
import Avatar from "@/components/avatar/avatar";
import styles from "./page.module.css"
import { USERS_ENDPOINT } from "@/common/constants";

export const generateMetadata = ({ params }: Props): Metadata => {
    return {
        title: `User page: ${params.username}`
    }
}

const getUserDetails = async (username: User["login"]): Promise<DetailedUser> => {
    const response = await fetch(`${USERS_ENDPOINT}/${username}`, {
        cache: 'force-cache',
        headers: {
          'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
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

type Props = {
    params: {
        username: string
    }
}

export default async function Page({ params }: Props) {
    const details = await getUserDetails(params.username)
    return <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.mainInfoWrapper}>
                <Avatar size={100} src={details.avatar_url} />
                <h2 className={styles.username}>{details.login}</h2>
                <p className={styles.fullname}>{details.name}</p>
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
