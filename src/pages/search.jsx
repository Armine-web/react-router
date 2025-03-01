import { useSearchParams } from "react-router"

export const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("q");
    console.log(searchParams);
    
    const handleInputChange = (e) => {
        setSearchParams({ q: e.target.value });

    }
    return (
        <div>
            <h1>Serch page</h1>
            <p>Query: {query}</p>
            <input onChange={handleInputChange} value={query} />
        </div>
        
    )
}