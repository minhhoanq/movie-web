import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import './detail.scss';

const CastsList = props => {
    const { category } = useParams();
    
    const [casts, setCasts] = useState([]);
    console.log(casts);

    useEffect(() => {
        const getCredits = async () => {
            const res = await tmdbApi.credits(category, props.id);
            setCasts(res.cast.slice(0, 5));
        }
        getCredits();
    },[category, props.id]);

    return (
        <div className="casts">
            {
                casts.map((item, i) => (
                    <div key={i} className="casts_item">
                        <div className="casts_item_img" style={{backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`}}></div>
                        <p className="casts_item_name">{item.name}</p>
                    </div>
                )) 
            }
        </div>
    )
}

export default CastsList;