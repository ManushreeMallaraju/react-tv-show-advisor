import React, { useEffect, useState } from 'react'
import { StarFill,  Star as StarEmpty  , StarHalf } from "react-bootstrap-icons"

function FiveStarRating({ rating }) {
      {/* // Declare star icon array
        // store number of filled stars
        // store if yes or no there is a half star
        // store the number of empty stars
        // push the filled star icons
        // push an half star icon if necessary
        // push the empty stars
        // render the star icon array
        */}
        const [starList, setStarList] = useState([]);

        const starFillCount = Math.floor(rating) ;

        const hasHalfStar = rating - parseInt(rating) >= 0.5;

        const starEmptyCount = 5 - starFillCount - (hasHalfStar ? 1 : 0);
       
        for(let i=0 ; i< starFillCount ; i++) {
          starList.push(<StarFill key={"star-fill" + i}/>);
        }

        if(hasHalfStar) {
          starList.push(<StarHalf key={"star-half"}/>);
        }

        for(let i=0; i< starEmptyCount; i++) {
          starList.push(<StarEmpty key={"star-empty" + i}/>);
        }
        return (
          <div>
            {starList}  <span >{rating}/5</span>
            {/* Have key for each element when we render a list */}
          </div>
    )
}

export default FiveStarRating
