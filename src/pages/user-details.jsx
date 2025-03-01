import { useParams } from "react-router"

export const UserDetails =() => {
    const { id } = useParams()
    return (
        <div>User Detailes {id}</div>
    )
}