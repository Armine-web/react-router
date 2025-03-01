import { Link } from "react-router"
import { useEffect } from "react"
export const Users = () => {
     useEffect(() => {
            throw new Error("Wrong validation")
        }, [])
    return (
        <div>
           <ul>
            <li><Link to = {`user/:${1}`}>Max</Link></li>
            <li><Link to = {`user/:${2}`}>Bob</Link></li>
            <li><Link to = {`user/:${3}`}>John</Link></li>
           </ul>
        </div>
    )
}