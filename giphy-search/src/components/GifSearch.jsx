import { useState } from "react";
function GifSearch({setQuery}) {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(input);
      }

    const handleChange = (e) => {
        // gets the event and the element that it's targeting, and get its value 
        setInput(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="searchInput">Enter a Search Term </label>
            <input onChange={handleChange} type="text" className="form-control" id="searchInput" />
            <button type="submit" className="btn btn-success">Search</button>
        </form>
    )
}

export default GifSearch
