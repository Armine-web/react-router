import { useNavigate } from "react-router"
export const Home = () => {
    const navigate = useNavigate();
    
    const handleSubmit = () => {
        navigate("search");   
    }

    const handleBack = () => {
        navigate(-1);
    }

    const handleForward = () => {
        navigate(+1);
    }

    return (
        <div>
            Home
            <br />
            <button onClick={handleSubmit}>Submit</button>
            <br />
            <button onClick={handleBack}>Back</button>
            <button onClick={handleForward}>Forward</button>
        </div>
    )
}