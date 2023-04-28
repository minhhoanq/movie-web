import React from "react";

import { useLocation } from 'react-router-dom';

import PageHeader from '../components/page-header/PageHeader';

import { category as cate } from '../api/tmdbApi';
import MovieGrid from "../components/movie-grid/MovieGrid";

const Catalog = () => {

    const category = useLocation();
    const strCategory = (category.pathname).replace('/', '');

    console.log(strCategory);

    return (
        <>
            <PageHeader>
            {strCategory === cate.movie ? 'Movies' : 'TV Series'}
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