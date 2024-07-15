import { DetailedUser, User } from "@/common/models";
import { getUserDetails } from "@/common/requests";
import Avatar from "@/components/avatar/avatar";
import Link from "next/link";
import styles from "./cardBody.module.css"
import { useEffect, useState } from "react";

type Props = {
    username: User["login"]
}

export default function UserCardBody({ username }: Props) {
    const [userDetails, setUserDetails] = useState<DetailedUser>()
    const [errorMessage, setErrorMessage] = useState<string>()

    useEffect(() => {
        getUserDetails(username)
            .then(details => {
                setUserDetails(details)
            })
            .catch (error => {
                setErrorMessage(error?.message)
            }) 
    }, []);

    if (errorMessage) return <h3 className={styles.error}>{errorMessage}</h3>

    if (userDetails) return <div>
        <Link href={`/${userDetails.login}`}>
            <div className={styles.bodyWrapper}>
                <Avatar src={userDetails.avatar_url} username={userDetails.login} />
                <div className={styles.nameWrapper}>
                    <p className={styles.username}>{userDetails.login}</p>
                    <p className={styles.fullname}>{userDetails.name}</p>
                </div>
            </div>
        </Link>
    </div>

    return <h3 className={styles.centerText}>Loading...</h3>

}