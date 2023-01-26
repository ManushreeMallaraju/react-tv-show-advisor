import React from 'react'
import TVShowListItem from '../TVShowListItem/TVShowListItem'
import s from "./style.module.css";

function TVShowList({recommendationsList, onClickItem}) {
  return (
    <div>
        <div className={s.title}>You'll probably like :</div>
        <div className={s.list}>
            {recommendationsList.map((recommendedShow) => {
                return (
                    <span className={s.tv_show_item} key={recommendedShow.id}>
                        <TVShowListItem 
                            tvShow={recommendedShow} 
                            onClickHandler={onClickItem}
                        />  
                    </span>
                ) 
            })}
        </div>
    </div>
  )
}

export default TVShowList
