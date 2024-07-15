import { User } from "@/common/models";
import { getUserDetails } from "@/common/requests";
import Avatar from "@/components/avatar/avatar";
import Link from "next/link";
import styles from "./cardBody.module.css"

type Props = {
    username: User["login"]
}

export default async function UserCardBody({ username }: Props) {
    try {
        const details = await getUserDetails(username)
        return <div>
            <Link href={`/${details.login}`}>
                <div className={styles.bodyWrapper}>
                    <Avatar src={details.avatar_url} />
                    <div className={styles.nameWrapper}>
                        <p className={styles.username}>{details.login}</p>
                        <p className={styles.fullname}>{details.name}</p>
                    </div>
                </div>
            </Link>
        </div>
    } catch (error: any) {
        return <div style={{ padding: 5 }}><h3 style={{ color: "red" }}>{error?.message}</h3></div>
    }
}