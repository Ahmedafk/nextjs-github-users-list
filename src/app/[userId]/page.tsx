import Avatar from "@/components/avatar"
import InfoLabel from "@/components/infoLabel"
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
    return <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div style={{ borderWidth: 1, borderRadius: 5, borderColor: "black", borderStyle: "solid", padding: 20 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

                <Avatar size={100} src="https://avatars.githubusercontent.com/u/25477217?v=4" />
                <p>brynary</p>
                <p>Ondokuz Mayis University</p>
            </div>

            <div style={{ margin: 10 }}>
                <InfoLabel tag="Company" value="GitHub" />
                <InfoLabel tag="Company" value="GitHub" />
                <InfoLabel tag="Company" value="GitHub" />
                <InfoLabel tag="Company" value="GitHub" />
                <InfoLabel tag="Company" value="GitHub" />
                <InfoLabel tag="Company" value="GitHub" />
            </div>
        </div>
    </div>
}
