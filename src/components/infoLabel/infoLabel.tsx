import styles from "./infoLabel.module.css"

type Props = {
    tag: string
    value: string | number
}

export default function InfoLabel({ tag, value }: Props) {
    return <div className={styles.container}>
        <p>{tag}</p>
        <p> : </p>
        <p>{value || "-"}</p>
    </div>
}
