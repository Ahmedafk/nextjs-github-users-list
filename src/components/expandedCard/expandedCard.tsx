import InfoLabel from "@/components/infoLabel/infoLabel"
import Avatar from "@/components/avatar/avatar";
import styles from "./expandedCard.module.css"
import Link from "next/link";
import { DetailedUser } from "@/common/models";

type Props = {
    details: DetailedUser
}

export default async function ExpandedCard({ details }: Props) {
    return <div className={styles.wrapper}>
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
}
