import { User } from "@/common/models";
import styles from "./card.module.css"
import UserCardBody from "./cardBody/cardBody";

type Props = {
    user: User
}

export default function UserCard({ user }: Props) {
    return <div className={styles.container}>
        <UserCardBody username={user.login} />
    </div>
}
