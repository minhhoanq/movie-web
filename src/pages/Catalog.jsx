import React from "react";

import PageHeader from '../components/page-header/PageHeader';
import { useParams } from "react-router";

import { category as cate } from '../api/tmdbApi';
import MovieGrid from "../components/movie-grid/MovieGrid";

const Catalog = () => {

    const { category } = useParams();
    console.log(category);

    return (
        <>
            <PageHeader>
            {category === cate.movie ? 'Movies' : 'TV Series'}
            </PageHeader>
            <div className="container">
                <div className="section mb-3">
                    <MovieGrid category={category} />
                </div>
            </div>
        </>
    );
}

export default Catalog;