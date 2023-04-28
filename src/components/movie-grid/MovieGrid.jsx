import React, { useState, useEffect} from "react";

import { useLocation } from 'react-router-dom';

import './movie-grid.scss';
import tmdbApi, { category, movieType, tvType } from "../../api/tmdbApi";

import MovieCard from '../movie-card/MovieCard';

const MovieGrid = props => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const keyword = useLocation();
    const strkeyword = (keyword.pathname).replace('/', '');

    useEffect(() => {
        const getList = async () => {
            let response = null;
            if (strkeyword === undefined) {
                const params = {};
                switch(props.category) {
                    case category.movie:
                        response = await tmdbApi.getMovieList(movieType.upcoming, {params});
                        break;
                    default:
                        response = await tmdbApi.getTvList(tvType.popular, {params});
                }
            } else {
                const params = {
                    query: strkeyword
                }
                response = await tmdbApi.search(strkeyword, {params});
            }
            setItems(response.results);
            setTotalPage(response.total_pages);
        }
        getList();
    }, [props.category, strkeyword]);

    return (
        <div className="movie-grid">
            {
                items.map((item, i) => (
                    <MovieCard category={item.category} item={item} key={i}/>
                ))
            }
        </div>
    )
}

export default MovieGrid;