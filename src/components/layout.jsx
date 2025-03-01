import { Outlet, Link } from "react-router"

export const Layout = () => {
    return (
        <div 
            style={{ padding: 20 }}>
                <nav>
                    <Link to="/">Home</Link>
                    <br />
                    <Link to="/about">About</Link>
                    <br />
                    <Link to="/users">Users</Link>
                    <br />
                    <Link to="/search">Search</Link>
                </nav>
                <hr />
                <Outlet />
        </div>
    )
 }