import { User } from "@/common/models";
import { USERS_ENDPOINT } from "@/common/constants";
import UsersList from "./usersList";

const getUsers = async (): Promise<User[]> => {
  const response = await fetch(`${USERS_ENDPOINT}?per_page=100`, {
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

  const users = await getUsers()
  return <UsersList initialData={users} />
}
