export interface UserType{
    username:string | null,
    userId: string,
    password: string,
    email: string | null
}

export interface UserProps{
    user:UserType | null
}