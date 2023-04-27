import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './movie-list.scss';

import MovieCard from '../movie-card/MovieCard';

import { SwiperSlide, Swiper } from 'swiper/react';
// import { Link } from 'react-router-dom';

// import Button from '../button/Button';

import tmdbApi, { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';


const MovieList = props => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const getList = async () => {
            let respone = null;
            const params = {};

            if(props.type !== 'similar') {
                switch (props.category) {
                    case category.movie:
                        respone = await tmdbApi.getMovieList(props.type, {params});
                        break;
                
                    default:
                        respone = await tmdbApi.getTvList(props.type, {params});
                        break;
                }
            } else {
                respone = await tmdbApi.similar(props.category, {params});
            }
            setItems(respone.results);
        }
        getList();
    },[]);

    return (
        <div className="movie-list">
            <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={'auto'}
            >
                {
                    items.map((item, i) => (
                        <SwiperSlide key={i} >
                            <MovieCard item={item} category={item.category}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default MovieList;