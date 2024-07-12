"use client"

import UserCard from "@/components/card/card";
import React, { useState, useMemo } from "react";
import { User } from "@/common/models";
import styles from "./page.module.css"
import { USERS_ENDPOINT } from "@/common/constants";

type Props = {
  initialData: User[]
}

export default function UsersList({ initialData }: Props) {
  const [users, setUsers] = useState<User[]>(initialData)
  const [loading, setLoading] = useState<boolean>(false)
  const [loadMoreFailed, setLoadMoreFailed] = useState<boolean>(false)

  async function loadMore() {
    setLoading(true);

    const lastFetchedUserId = users.at(-1)?.id || 0
    const res = await fetch(`${USERS_ENDPOINT}?per_page=100&since=${lastFetchedUserId}`, {
      cache: 'force-cache',
      headers: {
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    })

    setLoading(false)

    if (!res.ok) {
      setLoadMoreFailed(true)
      return
    }

    const newUsers = await res.json()
    const allUsers = [...users, ...newUsers]
    console.log("Num of users", allUsers.length)
    setUsers(allUsers)
    setLoadMoreFailed(false)
  };

  const memoizedUsers = useMemo(() => {
    return users.map(user => {
      return <UserCard key={user.id} user={user} />
    })
  }, [users]);

  return (
    <>
      <div className={styles.container}>
        {memoizedUsers}
      </div>
      <div className={styles.btnContainer}>
        <button style={{ padding: 20, color: loadMoreFailed ? "red" : "black" }} onClick={loadMore}>
          {
            loading ? 'Loading...'
              : loadMoreFailed ? 'Load more failed... try again?'
                : 'Load More'
          }
        </button>
      </div>
    </>
  );
}
