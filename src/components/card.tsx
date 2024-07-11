import Avatar from "./avatar";
import Link from "next/link";

export default function UserCard() {
    return <Link href={"/63197223679"} style={{ margin: 10 }}>
    <div style={{ display: "flex", flexDirection: "row", borderWidth: 1, borderRadius: 5, borderColor: "black", borderStyle: "solid", padding: 10, height: 100, justifyContent: 'center', alignItems: "center" }}>
        <Avatar src="https://avatars.githubusercontent.com/u/25477217?v=4" />
        <div style={{ display: "flex", flexDirection: "column", paddingLeft: 5 }}>
            <p>brynary</p>
            <p>Ondokuz Mayis University</p>
        </div>
    </div>
    </Link>
}
