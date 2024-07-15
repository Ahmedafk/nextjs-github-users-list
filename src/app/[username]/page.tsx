import { Metadata } from "next"
import styles from "./page.module.css"
import { getUserDetails } from "@/common/requests";
import ExpandedCard from "@/components/expandedCard/expandedCard";

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
        <ExpandedCard details={details} />
    </div>
}
