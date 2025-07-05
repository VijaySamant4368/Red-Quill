import { UserProps } from "@/types/User";

export default function UserProfile({ user }: UserProps) {
    if (!user) return <p>No user logged in</p>;
    return(
        <div>
            <h1>Username: {user.username}</h1>
            <h3>UserId: {user.userId}</h3>
        </div>
    )
}