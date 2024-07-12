"use client"

type Props = {
    error: Error
}

export default function ErrorPage(props: Props) {
    return <div style={{ padding: 5 }}><h3 style={{ color: "red"}}>{props?.error?.message}</h3></div>
}