// "use client"

import UserCard from "@/components/card";
// import { dummyUsers } from "./data";
// import { useState } from "react";
import { User } from "@/common/models";

const getUsers = async (): Promise<User[]> => {
  const response = await fetch(`https://api.github.com/users?per_page=100`, {
    cache: 'force-cache',
    headers: {
      'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github.v3+json'
    }
  })
  if (!response.ok) throw new Error("Failed to fetch users")

  return response.json()
}

export default async function Home() {
  // const [users, setUsers] = useState(dummyUsers)

  const users = await getUsers()
  return (
    <>
      <div>
        <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
          {users.map(user => {
            return <UserCard user={user} />
          })}
        </div>
        {/* <button style={{ padding: 20 }} onClick={() => setUsers([...users, ...dummyUsers])}>load more</button> */}
      </div>
    </>
  );
}
