"use client"

import UserCard from "@/components/card/card";
import React, { useState, useMemo } from "react";
import { User } from "@/common/models";
import styles from "./page.module.css"
import { getUsersPaginated } from "@/common/requests";

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

    try {
      const newUsers = await getUsersPaginated(lastFetchedUserId)
      const allUsers = [...users, ...newUsers]
      console.log("Num of users", allUsers.length)
      setUsers(allUsers)
      setLoadMoreFailed(false)
    } catch (error) {
      setLoadMoreFailed(true)
    } finally {
      setLoading(false)
    }
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
