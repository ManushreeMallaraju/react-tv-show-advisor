import s from "./style.module.css";
import React from 'react'
import { SMALL_IMG_COVER_BASE_URL } from '../../config';
const MAX_TITLE_CHAR = 20;

function TVShowListItem({ tvShow, onClickHandler }) {

    const onClickOfListItem = () => {
        onClickHandler(tvShow); // send the currentTvShow..
    }
   
    return (
        <div onClick={onClickOfListItem} className={s.container}> 
            <img 
                alt={tvShow.name} 
                src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path} 
                className={s.img}
            />
            <div className={s.title}>
                {/* {tvShow.name.length > MAX_TITLE_CHAR 
                ?  tvShow.name.slice(0,MAX_TITLE_CHAR) + "..."
                : tvShow.name } */}
                {tvShow.name}
            </div>
        </div>
    )
}

export default TVShowListItem
