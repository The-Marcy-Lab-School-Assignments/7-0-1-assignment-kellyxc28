import NavBar from './components/NavBar'
import GifContainer from './components/GifContainer'
import GifSearch from './components/GifSearch'
import { handleFetch } from './utils';
import API_KEY from '../config';
import { useState, useEffect } from 'react';

function App() {
  // states of gifs, error, and query 
  const [gifs, setGif] = useState();
  const [error, setError] = useState();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const doFetch = async () => {
      const [data, error] = await handleFetch(query ? `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=3&rating=g`: `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3&rating=g`);
      if (data) setGif(data.data);
      if (error) setError(error);
    };
    doFetch();
    // if (query) 
  }, [query]);

  useEffect(() => {
    console.log(gifs)
  }, [gifs])

  if (error) return <p>{error.message}</p>
  
  return (
    <div>
      <NavBar color='black' title="Giphy Search" />
      <div className="ui container">
        <GifSearch setQuery={setQuery} />
        <br />
        <GifContainer gifs={gifs}/>
      </div>
    </div>
  );
}

export default App;
