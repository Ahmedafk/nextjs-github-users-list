type Props = {
    tag: string
    value: string | number
}

export default function InfoLabel({ tag, value }: Props) {
    return <div style={{display: "flex", justifyContent: "center", gap: 3}}>
        <p>{tag}</p>
        <p> : </p>
        <p>{value || "-"}</p>
    </div>
}
