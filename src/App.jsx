import "./global.css";
import s from "./style.module.css";
import { TVShowAPI } from "./api/tv-show";
import { useState,useEffect } from "react";
import { BACKDROP_BASE_URL } from "./config";
import TVShowDetail from "./components/TVShowDetail/TVShowDetail";
import Logo from "./components/Logo/Logo";
import logoImg from "./assets/images/logo.png"
import TVShowListItem from "./components/TVShowListItem/TVShowListItem";
import TVShowList from "./components/TVShowList/TVShowList";
import SearchBar from "./components/SearchBar/SearchBar";

export function App () {
    
    const [currentTVShow, setCurrentTVShow] = useState([]);
    const [recommendationsList, setRecommendationsList] = useState([]);
   
    
        // when to call this methods ? see useEffect 
        async function fetchRecommendations(tvShowId)  {
            const recommendationsListResp = await TVShowAPI.fetchRecommendations(tvShowId);
            if(recommendationsListResp.length >  0) {
                setRecommendationsList(recommendationsListResp.slice(0, 10));// getting only first few
            }  
        }

     
 
        useEffect(() => {
            (async () => {
                const popularTVShowList = await TVShowAPI.fetchPopulars();
                if(popularTVShowList.length > 0) {
                    setCurrentTVShow(popularTVShowList[0]);
                }
            })(); // calling async function directly withput passing the name.
        }, []);
    
        useEffect(() => {
            if(currentTVShow) { // defined
                fetchRecommendations(currentTVShow.id);
            }
        }, [currentTVShow]) // listen to currentTVShow changes and call recommendations.

        const updateCurrentTVShow = (tvShow) => {
            setCurrentTVShow(tvShow);
        }

        async function fetchByTitle (title) {
            const searchResponse = await TVShowAPI.fetchByTitle(title);
            if(searchResponse.length > 0) {
                setCurrentTVShow(searchResponse[0]);
            }
        }
    // console.log(currentTVShow);
    // console.log(recommendationsList);

    return (
        <div className={s.main_container}
                style={{ 
                    background : currentTVShow 
                    ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
                    : "black"
                }}
        >
            <div className={s.header}>
                <div className="row">
                    <div className="col-4">
                        <div><Logo img={logoImg} title="WatoWatch" subtitle="Find a show you may like"/></div>
                    </div>
                    <div className="col-md-12 col-lg-4">
                       <SearchBar onSubmit={fetchByTitle}/>
                    </div>
                </div>
            </div>
                <div className={s.tv_show_detail}>
                    {
                        currentTVShow && <TVShowDetail key={currentTVShow.id} tvShow={currentTVShow}/>                 
                    }
                </div>
            <div className={s.recommended_shows} >
                {/* Test the data.. */}
                {/* {
                    currentTVShow && (
                        <TVShowListItem 
                            tvShow={currentTVShow} 
                            onClickHandler={(tvShow) => {
                                console.log("i have clicked", tvShow)
                                setCurrentTVShow(tvShow);
                            }}
                        />
  
                    )
                    // TvShow Asking to send back it's tvShow
                } */}
               {
                currentTVShow && (
                    <TVShowList
                        recommendationsList={recommendationsList}
                        tvShow={currentTVShow} 
                        onClickItem={updateCurrentTVShow}
                        // onClickHandler={(tvShow) => {
                        //         console.log("i have clicked", tvShow)
                        //         setCurrentTVShow(tvShow);
                        // }}
                    />
                )
               }
            </div>
        </div>
    )
}