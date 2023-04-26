import React from "react";
import HeroSlide from "../components/hero-slide/HeroSlide";
import { OutlineButton } from "../components/button/Button";
import { Link } from 'react-router-dom';
import MovieList from "../components/movie-list/MovieList";
import { category, movieType } from "../api/tmdbApi";

const Home = () => {
    return (
        <div>
            <HeroSlide/>
            <div className="container">
                <div className="section mb-3">
                    <div className="section_header mb-2">
                        <h2>Trending</h2>
                        <Link to="/movie">
                            <OutlineButton className="small" >
                                View more
                            </OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular} />
                </div>
            </div>
        </div>
    )
}

export default Home;