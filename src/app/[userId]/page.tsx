import { Metadata } from "next"

type Props = {
    params: {
        userId: string
    }
}

export const generateMetadata = ({ params }: Props): Metadata => {
    return {
        title: `User page ${params.userId}`
    }
}

export default function Page({ params }: Props) {
        
    return <h1>Apple {params.userId}</h1>
}
