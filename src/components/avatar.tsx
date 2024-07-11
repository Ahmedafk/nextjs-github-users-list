import Image from "next/image";

type Props = {
    src: string
    size?: number
}

export default async function Avatar({ size = 50, src }: Props) {
    return <Image
        width={size}
        height={size}
        style={{ borderRadius: size / 2 }}
        src={src}
        alt="brynary profile picture" />
}
