"use client"

import UserCard from "@/components/card";
import { dummyUsers } from "./data";
import { useState } from "react";

export default function Home() {
  const [users, setUsers] = useState(dummyUsers)
  return (
    <>
      <div>
        <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
          {users.map(user => {
            return <UserCard />
          })}
        </div>
          <button style={{ padding: 20 }} onClick={() => setUsers([...users, ...dummyUsers])}>load more</button>
      </div>
    </>
  );
}
