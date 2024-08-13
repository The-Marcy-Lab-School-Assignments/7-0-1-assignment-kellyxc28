function GifContainer({gifs}) {
    return (
        <ul>
            {gifs?.map((oneGif) => {
                return <>
                  <li><img src={oneGif.images.original.url}></img>
                  </li>
                </>
            })}
        </ul>
    )
}

export default GifContainer
