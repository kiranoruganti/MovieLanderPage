import React from "react";
import App from "./App";

const MovieCard =({movie})=>{
    return (
        <div className="movie">
            
            <div>
            <p>{movie.Year}</p>
            </div>

            <div>
                <img src={movie.Poster !== 'N/A'? movie.Poster :'https://via.placeholder.com/400'}
                // if api doesnot provide a image or image 'N/A'
                // then print 400*400 size blank photo we use the top condtional if statement
                alt={movie.Title}></img>
            </div>

            <div>
            <span>{movie.Type}</span>      {/* movie type =movie or webseries or tv show  */}
            <h3>{movie.Title}</h3>         {/* movie name */}
            </div>

        </div>

    )

}
export default MovieCard;