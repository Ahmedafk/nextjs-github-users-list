// "use client"

import UserCard from "@/components/card/card";
// import { dummyUsers } from "./data";
// import { useState } from "react";
import { User } from "@/common/models";
import styles from "./page.module.css"

const getUsers = async (): Promise<User[]> => {
  const response = await fetch(`https://api.github.com/users?per_page=100`, {
    cache: 'force-cache',
    headers: {
      'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github.v3+json'
    }
  })
  if (!response.ok) {
    const errorMessage = await response.text()
    console.error(`Failed to fetch users`, errorMessage)
    throw new Error("Failed to fetch users, please try again later!")
  }

  return response.json()
}

export default async function Home() {
  // const [users, setUsers] = useState(dummyUsers)

  const users = await getUsers()
  return (
    <>
      <div>
        <div className={styles.container}>
          {users.map(user => {
            return <UserCard key={user.id} user={user} />
          })}
        </div>
        {/* <button style={{ padding: 20 }} onClick={() => setUsers([...users, ...dummyUsers])}>load more</button> */}
      </div>
    </>
  );
}
