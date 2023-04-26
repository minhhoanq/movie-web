import React, { useEffect, useState, useNavigate } from "react";

import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Button, { OutlineButton } from '../button/Button';

import tmdbApi, { movieType } from '../../api/tmdbApi';
import apiConfig from "../../api/apiConfig";

import './hero-slide.scss';

const HeroSlide = () => {

    SwiperCore.use([Autoplay]);

    const [movieItems, setMovieItems] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const params = {page: 1};
            try {
                const respone = await tmdbApi.getMovieList(movieType.popular, {params});
                setMovieItems(respone.results.slice(0, 4));
                console.log(respone);
            } catch (error) {
                console.log('error');
            }
        }
        getMovies();
    },[])

    return (
        <div className="hero-slide">
            <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                // autoplay={{delay: 3000}}
            >
                {
                    movieItems.map((item, i) => (
                        <SwiperSlide key={i} >
                            {({isActive}) => (
                                <HeroSlideItem item={item} className={`${isActive ? 'active' : ''}`}/>
                            )}
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

const HeroSlideItem = props => {
    let navigate = useNavigate;

    const item = props.item;

    const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);

    return (
        <div
            className={`hero-slide_item ${props.className}`}
            style={{backgroundImage: `url(${background})`}}
        >
            <div className="hero-slide_item_content container" >
                <div className="hero-slide_item_content_info" >
                    <h2 className="title">{item.title}</h2>
                    <div className="overview">{item.overview}</div>
                    <div className="btns">
                        <Button onClick={() => console.log('now')}>
                            watch now
                        </Button>
                        <OutlineButton
                            onClick={() => console.log('trailer')}
                        >
                            watch trailer
                        </OutlineButton>
                    </div>
                </div>
                <div className="hero-slide_item_content_poster">
                    <img src={apiConfig.w500Image(item.poster_path)} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default HeroSlide;