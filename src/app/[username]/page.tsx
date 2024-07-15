import InfoLabel from "@/components/infoLabel/infoLabel"
import { Metadata } from "next"
import Avatar from "@/components/avatar/avatar";
import styles from "./page.module.css"
import { getUserDetails } from "@/common/requests";
import Link from "next/link";

export const generateMetadata = ({ params }: Props): Metadata => {
    return {
        title: `User page: ${params.username}`
    }
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
            <Link href={details.html_url}>
                <div className={styles.mainInfoWrapper}>
                    <Avatar size={100} src={details.avatar_url} username={details.login} />
                    <h2 className={styles.username}>{details.login}</h2>
                    <p className={styles.fullname}>{details.name}</p>
                </div>
            </Link>

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
