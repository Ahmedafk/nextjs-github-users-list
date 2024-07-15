import Image from "next/image";

type Props = {
    src: string
    username: string
    size?: number
}

export default function Avatar({ size = 50, src, username }: Props) {
    return <Image
        width={size}
        height={size}
        style={{ borderRadius: size / 2 }}
        src={src}
        alt={`${username} profile picture`} />
}
