import { UserProps } from "@/types/User";

export default function UserProfile({ user }: UserProps) {
    if (!user) return(
    <p className="text-white/70 italic text-center mt-6">
        No user logged in
    </p>)
    return(
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20 text-white max-w-md mx-auto mt-8 custom-effect">
      <h1 className="text-2xl font-semibold mb-2">
        Username: <span className="font-light">{user.username}</span>
      </h1>
      <h3 className="text-md font-medium text-white/80">
        User ID: <span className="font-light">{user.userId}</span>
      </h3>
    </div>
    )
}
