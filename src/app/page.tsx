import UsersList from "./usersList";
import { getUsersPaginated } from "@/common/requests";

export default async function Home() {

  const users = await getUsersPaginated()
  return <UsersList initialData={users} />
}
