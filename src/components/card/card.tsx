import { User } from "@/common/models";
import styles from "./card.module.css"
import React from "react";
import UserCardBody from "./cardBody/cardBody";

type Props = {
    user: User
}

const UserCard = React.memo(({ user }: Props) => {
    return <div className={styles.container}>
        <UserCardBody username={user.login} />
    </div>
})

export default UserCard