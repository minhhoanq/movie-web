import React from "react";

import { useLocation } from 'react-router-dom';

const Catalog = () => {

    const category = useLocation();

    console.log(category.pathname);

    return (
        <div>
            Catalog
        </div>
    );
}

export default Catalog;