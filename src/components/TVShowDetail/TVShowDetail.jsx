import s from "./style.module.css"
import FiveStarRating from "../FiveStarRating/FiveStarRating"
import React from 'react'

function TVShowDetail({ tvShow }) {

  const rating = tvShow.vote_average/2;

  return (
    <div>
        <div className={s.title}>
            {tvShow.name}
        </div>

        <div className={s.rating_container}>
          <FiveStarRating  rating={rating}/>
         
        </div>

        <div className={s.overview}> 
            {tvShow.overview}
        </div>
    </div>
  )
}

export default TVShowDetail
