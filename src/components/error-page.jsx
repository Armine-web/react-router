
import { useRouteError } from "react-router"
export const ErrorPage = () => {
    const error = useRouteError();

    
    return (
        <div>
            <h1>Oops! ☹️</h1>
            <p>{error.statusText || error.message}</p>
        </div>
    )
}