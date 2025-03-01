import { Link } from "react-router"
export const NotFound = () => {
    return (
        <div>
            <h1>404: Page Not Found</h1>
            <p>Sorry, the page you are looking for could not be found.</p>
            <Link to = "/" >Back to Home</Link>
        </div>
    )
}